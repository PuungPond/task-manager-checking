// CRUD
const chalk = require('chalk');
// const mongodb = require('mongodb');

// const ObjectID = mongodb.ObjectID
//     // access neccessaly function
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// useUnifiedTopology: true << Might needed>>
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log(chalk.red.inverse('Unable to connect to database!'));
    } else {
        console.log(chalk.green.inverse('Connected!'));
        const db = client.db(databaseName);

        // Asynchronous
        // db.collection('users').insertOne({
        //     _id: id,
        //     name: "Pornthep Phanbua",
        //     age: 21,
        //     position: "CEO",
        //     phone: "0623098598"
        // }, (error, result) => {
        //     if (error) {
        //         return console.log(chalk.red.inverse("Unable to insert user data to database!"))
        //     } else {
        //         console.log(chalk.green.inverse(JSON.stringify(result.ops)))
        //     }
        // })

        // db.collection('users').findOne({ _id: new ObjectID("5e8814e91af1140ac8a32ded") }, (error, user) => {
        //     if (error) {
        //         console.log("Unable to fetch")
        //     } else {
        //         console.log(user)
        //     }
        // })

        // db.collection('users').find({ age: 21 }).toArray((error, users) => {
        //     console.log(users)
        // })
        // db.collection('users').find({ age: 21 }).count((error, count) => {
        //     console.log(count)
        // })

        // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        //     console.log(task)
        // })

        // db.collection('users')
        //     .updateOne({ _id: new ObjectID('5e8810e62b08e801709323c6') }, {
        //         $set: {
        //             name: 'Tong Pha',
        //         },
        //         $inc: {
        //             age: 1,
        //         },
        //     })
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').deleteMany({
        //     age: 21
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('tasks').deleteOne({
        //     description: "Dashboard to show main page"
        // }).then((result) => {
        //     console.log(result.deletedCount)
        // }).catch((error) => {
        //     console.log(error)
        // })





    }
});