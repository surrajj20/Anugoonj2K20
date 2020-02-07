const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

  const { updateVisitsDB, setupDB, getVisitsNo } = require('./database');


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
app.use(express.urlencoded({ extended: true }))

var port = process.env.PORT || 3000
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))
var query1;
var email1;


app.get('/', (req, res) => {

  res.render('index.hbs')

})

app.use(function (req, res, next) {
  var hasVisited = req.cookies.hasVisited;
  if (hasVisited === undefined) {
    hasVisited = 1;
    res.cookie('hasVisited', hasVisited, { maxAge: 30 * 24 * 3600, httpOnly: true });

      updateVisitsDB();
  }
  next();
});


app.get('/visits', (req, res) => {
  res.send('Overall Visit :' + getVisitsNo())
})


try {
  app.post('/', (req, res) => {
    query1 = req.body.query1;
    email1 = req.body.email1;

    const msg = {
      to: 'anugoonjipu2020@gmail.com',
      // to: 'unnatmalkoti@gmail.com',
      from: `Anugoonj@anugoonj-ipu.com`,
      subject: 'Reply on Anugoonj website',
      text: `Sender: ${email1}\nSaid: ${query1}`,
    };

    console.log(msg);
    sgMail.send(msg);

    res.redirect('/')
  }

  )
}
catch (err) { console.error(err) };


app.listen(port, () => {
  console.log('server started on http://localhost:' + port)
})
