const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

//merge design files
app.use('/static', express.static('public'));

const mainRoutes = require("./routes/index");
const cardRoutes = require("./routes/cards")
const helloRoutes = require("./routes/hello");

app.use('/', mainRoutes);
app.use('/cards', cardRoutes);
app.use('/hello', helloRoutes);


app.post('/goodbye', (req,res)=>{
    res.clearCookie("username");
    res.redirect('/hello');

});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App is running on port: ${port}`);
});



// modules to install
// express, nodemon, cookie-parser, body-parser, pug, 








