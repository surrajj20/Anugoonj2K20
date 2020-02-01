const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");



const { getBlogArray } = require('./database')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.use(session({
  secret: 'a very long unguessable string',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60,
  },
}),
)

app.use(express.json()) //for post requests
app.use(express.urlencoded({extended:true})) 

var port = process.env.PORT || 8080
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))
var query1;
var email1;


var overallvisits = 0;
app.get('/',(req, res) => {
  
  if (!req.session.visits) {
    req.session.visits=1 //per user visits
    overallvisits++;
    
    // incrementing values
    getBlogArray()
    console.log(overallvisits);    
    res.render('index1.hbs')

  } 
  else
  {
      res.render('index1.hbs')
  }
  
})

app.get('/visits', (req, res)=>
{
  res.send( 'Overall Visit : ' + overallvisits)
})


try{app.post('/',(req, res) => {
  query1 = req.body.query1,
  email1 = req.body.email1

  const msg = {
   to: 'anugoonjipu2020@gmail.com',
   from: `${email1}`,
   subject: 'query',
   text: `sender: ${email1} 
          query: ${query1}`,
   
 };
 sgMail.send(msg);

  res.redirect('/')
}

)}
catch(err) {console.error(err)};


app.listen(port, () => {
  console.log('server started on http://localhost:' + port)
})
