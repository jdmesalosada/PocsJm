const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author:{
    type: authorSchema,
    required: true
  } 
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
  const course = await Course.findById(courseId);
  course.author.name = 'Juli update';
  course.save();
}

//update directly in the database
async function updateAuthor2(courseId){
  const course = await Course.update({_id: courseId}, {
      $set:{
        'author.name' : 'Juli update 2'
      }
  });
}

//createCourse('Node Course', new Author({ name: 'Mosh' }));
//updateAuthor('5afb6cb7e7f56f04aef4b358');
updateAuthor2('5afb6cb7e7f56f04aef4b358');
