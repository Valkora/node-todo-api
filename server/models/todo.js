const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text : {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false

  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// var newTodo = new Todo({
//   text: 'Take a nap',
//   completed: false,
//   completedAt: 712
// });
//
// newTodo.save().then((doc) => {
//   console.log("Saved todo", doc);
// }, (e) => {
//   console.log('Unable to save');
// });

// var otherTodo = new Todo({
//   text: 'Just do it!'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log("Unable to save");
// });

module.exports = {Todo};
