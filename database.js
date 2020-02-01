const { MongoClient } = require('mongodb')
 
// Connection URL
const url = 'mongodb://localhost:27017';
// const url = "mongodb+srv://unnat:8lRdHvx8O8cmdcKk@cluster0-svlpu.mongodb.net/";

  
// Use connect method to connect to the server

// const connectdb = (dbName) => {
//   return MongoClient.connect(url)
//   .then(client => client.db(dbName))
// }

const visit = {
    indexing: 1,
    count: 0
} 

//  const InsertVisit = () =>
//     connectdb('visitsdb')
//     .then(db => db.collection('visitsCollection'))
//     .then(collection => collection.insertOne(visit))

//  InsertVisit()   

// increment
//  const incrementVisits = () =>
//     connectdb('visitsdb')
//     .then(db => db.collection('visitsCollection'))
//     .then(collection => collection.updateOne(
//         {indexing: 1},
//             {$inc: {count : 1}}
//     ))
//     incrementVisits()


    async function getBlogArray (){
       
     
        // var client = await MongoClient.connect(url)
        var client = await MongoClient.connect(url, { useNewUrlParser: true }) 

        var visitsdb = client.db('visitsdb')
        var visitsCollection = visitsdb.collection('visitsCollection')
        
        var visitsArray = await visitsCollection.find().toArray()
        visitsArray.forEach(vis => console.log(vis))
 
        // increment
        visitsCollection.update(
            {indexing: 1},
            {$inc: {count : 1}}
        )
        // deleting all entries
        // visitsCollection.remove({})
     }  
     
     getBlogArray()

// const getAllBlogs = connectdb('visitsdb')
//                     .then(db => db.collection('visits').find())
//                     .then(cursor => cursor.toArray())

 

//  getAllBlogs.forEach((visit) => console.log(JSON.stringify(visit)))                   
    

// function  incrementVisits() {
//     connectdb('visitsdb')
//     .then(db => db.collection('visits').update(
//       { indexing: 1},
//       {$inc: {'count': 1}}
//     ).then(getAllBlogs()))
// }
// incrementVisits() 

    

    // console.log(visit)

module.exports = {
    getBlogArray

}