
// first of all we require the express module cos we'll use express 
const express = require('express');
// then path to let it know the server where are the files inside the project
const path = require('path');
// handlebars for layouts and the questions i had with html
const exphbs = require('express-handlebars');

// Initialization
const app = express();

// Settings
// we're telling the sv in what port they should start, or if they have a port, then use it.
app.set('port', process.env.PORT || 3000);
// tell to the server that the file views is on src carpet, the same as this file
app.set('views', path.join(__dirname, 'views'));
// config the handlebars module 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded());

//Server is listening 

// we store the app.listen, means we init the sv in the port gave it and execute a console.log saying the port
const server = app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${server.address().port}`);
});

// Routes
app

