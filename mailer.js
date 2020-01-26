const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

// const query = $(".query").val()
// const email = $(".email").val()

const express = require('express')

const app = express()
app.use(express.json()) //these two lines are needed when you are making post requests.As you've seen postman, post request can be made in 2 ways/formats/whatever, json and urlencoded
app.use(express.urlencoded({extended:true})) 

var port = process.env.PORT || 8080
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))
var query1;
var email1;
app.get('/',(req, res) => {
  res.send('index.html')
} )
try{app.post('/',(req, res) => {
  query1 = req.body.query1,
  email1 = req.body.email1

  const msg = {
   to: 'anugoonjipu2020@gmail.com',
   from: `${email1}`,
   subject: 'query',
   text: `sender: ${email1} 
          query: ${query1}`,
   // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
 };
 sgMail.send(msg);

  res.redirect('/')
}

)}
catch(err) {console.error(err)};


app.listen(port, () => {
  console.log('server started on http://localhost:' + port)
})
// const msg = {
//   to: 'sanket.eeiit@gmail.com',
//   from: `${email}`,
//   subject: 'query',
//   text: `sender: ${email} 
//          query: ${query}`,
//   // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);