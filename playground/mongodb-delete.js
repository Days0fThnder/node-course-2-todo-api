const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connnect to MongoDb server');
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

     //deleteMany
    // db.collection('Users').deleteMany({name: 'Jean-leman'}).then((result) =>{
    //      console.log(result);
    // });

     // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5af0ff2a5d4b4f267cacb831')}).then((result) =>{
        console.log(result);
    });
    

    //client.close();
});