const mongoose = require('mongoose');

var User = mongoose.model('User',{
  name: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlenght: 3,
    trim: true
  }
});

// var firstUser = new User({
//   name: "Valery K        ",
//   email: "                 pompom    "
// });
//
// firstUser.save().then((res) => {
//   console.log(JSON.stringify(res, undefined, 4));
// }, (e) => {
//   console.log("Check the properties");
// });


module.exports = {User};
