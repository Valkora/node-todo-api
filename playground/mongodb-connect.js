//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
/*var obj = new ObjectID();
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

/*  db.collection('User').insertOne({
    name: 'Agata',
    age: 20,
    location: 'Chisinau'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert new user', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
*/
/*  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
*/
  client.close();
});
