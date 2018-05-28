const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connnect to MongoDb server');
    const db = client.db('TodoApp')
    // db.collection('Todos').find({
    //     _id: new ObjectID('5af0fd1fe425082978c6e22f')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({name: 'Taco'}).toArray().then((docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch todos', err);
    })

    //client.close();
});