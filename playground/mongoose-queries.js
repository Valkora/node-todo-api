const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// var id = '6ddda7b1744907a9c18dcf8fece';
//
// if(! ObjectID.isValid(id)){
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(! todo) {
//     return console.log('ID not found');
//   }
//     console.log('Todo by id', todo);
//
// }).catch((e) => {
//   console.log(e);
// });

var id = '5a79cbda58df941a78878489';

User.findById(id).then((user) => {
  if(! user){
    return console.log('User with this ID isnt found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
