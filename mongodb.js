const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectId("63cd8cc297b8526c7fce9f23")
    // }, {
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

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
    //     age: 35
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // .collection('tasks').deleteOne({
    //     description: 'Deliver cat to vet'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectId("63cd93bd0da60f4d24832ea7")}, (error, users) => {
    //     if (error) {
    //         console.log('Unabled fetch data')
    //     }

    //     console.log('users', users)
    // })

    // db.collection('users').find({ age: 35 }).toArray((error, users) => {
    //     console.log('users', users)
    // })

    // db.collection('users').find({ age: 35 }).count((error, count) => {
    //     console.log('count', count)
    // })

    // db.collection('tasks').findOne( { _id: new ObjectId("63d2d00bd75e6b62b496a3fc") }, (error, users) => {
    //     if (error) {
    //         console.log('Unabled fetch data')
    //     }

    //     console.log('Last task: ', users)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     console.log('tasks', users)
    // })

    // db.collection('tasks').find({ completed: false }).count((error, count) => {
    //     console.log('count not compleated tasks', count)
    // })

})

