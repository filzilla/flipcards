const express = require ('express');
const mustache = require ('mustache-express');
const mustacheExpress = require ('mustache-express')

const bodyParser = require ('body-parser');

const application = express();
// view engines and views

application.engine('mustache', mustacheExpress());

application.set('views', './views');
application.set('view engine', 'mustache');

// middleware
application.use('/static', express.static('static'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded());


// routes

application.get ('/', (request, response) =>{

    response.render('index');
});

application.get ('/signup', (request, response) =>{

    response.render('signup');
});

application.get ('/login', (request, response) =>{

    response.render('login');
});

application.get ('/flipcards', (request, response) =>{

    response.render('flipcardquiz');
});






application.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
    });
