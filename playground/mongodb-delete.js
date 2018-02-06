//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');


// deleteMany

// db.collection('Todos').deleteMany({text: "Stay tune"}).then((result) => {
//   console.log(result);
// });

//deleteOne

// db.collection('Todos').deleteOne({text: "Hello"}).then((result) => {
//   console.log(result);
// }, (err) => {
//   console.log('Wrong name', err);
// });

//findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
// db.collection('User').deleteMany({name:"Valery"}).then((result) => {
//   console.log(result);
// });

// db.collection("User").deleteOne({name: "Agata"}).then((result) => {
//   console.log(result);
// });

db.collection("User").findOneAndDelete({_id: new ObjectID('5a78a1fee9ba4914e8bd5a51')}).then((result) => {
  console.log(result);
});

//  client.close();
});
