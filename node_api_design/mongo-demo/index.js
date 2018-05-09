const mongoose = require('mongoose');

//En el caso de que la base de datos playground no exista
//mongo la creara de forma automatica.
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect with mongo db', err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        //match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'], // Con esto decimos que el campo
        //category solo puede tener estos valores: 'web', 'mobile', 'network'
        lowercase: true // esta propiedad aplica para los strings basicamente mongoose convierte el valor a lowercase,
    },
    author: String,
    //tags: [String],
    tags: { // Forzamos a que los cursos tengan por lo menos un tag.
        type: Array,
        validate: {  // Validador personalizado.
             isAsync: true,
            validator: function (v, callback) {
               setTimeout(()=>{
                 const result = v && v.length > 0; //validamos que el arreglo
              //tenga por lo menos un valor y que no sea nulo.
                 callback(result);
               }, 1000);
            },
            message: 'A course should have at least one tag.'//Mensaje personalizado cuando
            //se presente el error.
        }
    },
    date: { type: Date, default: Date.now },
    isPublised: Boolean,
    price: {
        type: Number,
        required: function () { // Con esto decimos que si la propiedad published es true
            //entonces el campo price va a ser obligatorio.
            return this.isPublised;
        },
        min: 10,
        max: 200
    }
});

//Cuando usamos pascal casing es porque estamos definiendo una clase y no un objeto.
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    //aqui usamos camel case convention ya que nos estamos refiriendo a un objeto.
    const course = new Course({
        name: 'Angular course',
        category:'-',
        author: 'Vanessa',
        tags: ['angular', 'frontend'],
        //tags: null,
        isPublised: true
        //price:15
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
      for(field in ex.errors){
        console.log(ex.errors[field].message);
      }

    }

}

async function getCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function getCoursesByFilter() {
    //Aplicamos un filtro para encontrar los cursos
    //que tenga como author Julian y que este publicados.
    const courses = await Course
        .find({ author: 'Vanessa', isPublised: true })
        .limit(10)
        .sort({ name: 1 })// El 1 indica en orden ascendente, y -1 en orden descendente.
        .select({ name: 1, tags: 1 })// Con select indicamos solo las propiedades que queremos
    //obtener, en este caso solo vamos a traer la propiedad name y tags.
    console.log(courses);
}

async function comparisonQueryOperators() {
    //eq (equal)
    //ne (not equal)
    //gt (greather than)
    //gte (greather tha or equal to)
    //lt (less than)
    //lte (less than or equal to)
    //in
    //nin (not in)

    const courses = await Course
        //.find({ price: {$gt: 10, $lte: 20} }) // Aca estamos expresando que queremos
        //los cursos que tenga un precio mayor a 10
        //despues del signo $ va alguno de los operadores de comparación.
        .find({ price: { $in: [10, 15, 20] } }) // traemos cursos que tenga los valores 10, 15, 20.
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })

    console.log(courses);

}

async function logicalQueryOperators() {

    //or
    //and

    const courses = await Course
        .find()
        .or([{ author: 'Julian' }, { isPublised: true }]) // Aca decimos
        //traiga los cursos donde el author sea Julian o los cursos donde la propiedad
        // isPublised sea igual a true.
        //.and([{author: 'Julian'}, {isPublised: true}])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })

    console.log(courses);

}

//Update a course using the approach: Query first
//Consiste en buscar un documento por su id
//Modificamos sus propiedades.
//y llamamos el metodo Save()
async function upateCourseApproachQueryFirst(id) {
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublised = true;
    course.author = 'Another author';

    /*course.set({
        isPublised: true, author: 'Another auhtor'
    });*/

    const result = await course.save();
    console.log('Result: ', result);
}

//Update a course using the approach: Update first
//En vez de devolver el documento primero
//vamos a la base de datos y lo actualizamos directamente.
async function upateCourseApproachUpdateFirst(id) {
    const result = await Course.update({ _id: id }, {
        $set: {
            author: 'juli update',
            isPublised: false
        }
    });

    console.log(result);

    /*const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'juli update',
            isPublised: false
        }
    }, {new: true});//Esta propiedad es para obtener el documento con los valores actualizados.
    console.log(course);*/
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);

}

createCourse();
//getCourses();
//getCoursesByFilter();
//upateCourseApproachQueryFirst('5aef7a8693a9042089f3fccc');
//upateCourseApproachUpdateFirst('5aef7a8693a9042089f3fccc');
//removeCourse('5aef7a8693a9042089f3fccc');