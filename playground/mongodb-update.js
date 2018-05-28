const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connnect to MongoDb server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b0c23fe4e26186a6a2033e1')
    // }, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Taco'
    }, {$set: {name: 'Jean-leman'}, $inc: {age: 1}}, {returnOriginal: false}).then((result) => {
        console.log(result);
    });


    

    //client.close();
});