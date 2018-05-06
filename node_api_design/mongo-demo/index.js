const mongoose = require('mongoose');

//En el caso de que la base de datos playground no exista
//mongo la creara de forma automatica.
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect with mongo db', err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublised: Boolean
});

//Cuando usamos pascal casing es porque estamos definiendo una clase y no un objeto.
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    //aqui usamos camel case convention ya que nos estamos refiriendo a un objeto.
    const course = new Course({
        name: 'Angular course',
        author: 'Vanessa',
        tags: ['angular', 'frontend'],
        isPublised: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses =  await Course.find();
    console.log(courses);
}

async function getCoursesByFilter(){
    //Aplicamos un filtro para encontrar los cursos
    //que tenga como author Julian y que este publicados.
    const courses = await Course
        .find({ author: 'Vanessa', isPublised: true})
        .limit(10)
        .sort({ name: 1 });// El 1 indica en orden ascendente, y -1 en orden descendente.
    console.log(courses);
}

//createCourse();
//getCourses();
getCoursesByFilter();