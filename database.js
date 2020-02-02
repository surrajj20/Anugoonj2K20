const { MongoClient } = require('mongodb')
var visitsNo =0;
 
// Connection URL
const url = 'mongodb://localhost:27017';
// const url = "mongodb+srv://unnat:8lRdHvx8O8cmdcKk@cluster0-svlpu.mongodb.net/";


function updateVisitsDB()
{
    MongoClient.connect(url, (err, db)=>{
        if (err) throw err;

        var dbo = db.db("anugoonj");
        dbo.collection("visits").updateOne({'id':1}, { $inc: {'visitsNo' : 1}})
    });
}


function setupDB()
{
    MongoClient.connect(url, (err,db)=>
    {
        var dbo = db.db("anugoonj");
        dbo.createCollection('visits', (err, res)=>
        {
            var myobj = {'visitsNo' : 1, 'id' : 1}
            dbo.collection('visits').insertOne(myobj, (err, res)=>
            {
                if(err) throw err;
                db.close();
            })
        })
    })
}

function ReadVisitDB()
{
    MongoClient.connect(url, (err, db)=>
        {
            var dbo = db.db('anugoonj');
            dbo.collection('visits').findOne({'id' : 1}, (err, result)=>
            {
                visitsNo = result.visitsNo;
                db.close();
            })
        });
}

setInterval(() => {
    ReadVisitDB();
}, 5000);

function getVisitsNo()
{
    return visitsNo;
}

module.exports = {
    updateVisitsDB,
    setupDB,
    getVisitsNo
}