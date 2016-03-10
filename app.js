// first thing npm init = creates a package.json file
// npm install express -- save = installs express library
// using express (library) makes setting up the server easier since it has many shortcut methods.
var express = require('express');
//create an app that includes express
var app = express();
// request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default. npm install request --save
var request = require('request');

//using EJS templating engine to build the pages before sending them back to the browser
//this is installed using the command 'npm install ejs --save'
//using the 'save' flag adds this library to our list of dependencies in the package.json file.
app.set('view engine', 'ejs');   //points to views directory ejs require a directory named views

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
//Pass the name of the directory that contains the static assets to the express.static middleware function to start serving the files directly. For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'));

//req=request res=response /=the path to root
app.get('/', function(req,res){
    // reponse to send to the page
    res.send('Hello World!');
});



console.log('Hello!');
//listen on port 3000
app.listen(3000, function(){
    console.log('app listening on port 3000');
});


//---------------------------------------------------------------------------------------------
// the below code is from http://nodeguide.com/beginner.html#learning-javascript
// didn't work  ==  missing other stuff
//console.log('Hello World');
//
//var http = require('http');
//var server = http.createServer(function(req,res){
//    res.writeHead(200);
//    res.end('Hello HTTP');
//});
//server.listen(3000);
//-------------------------------------------------------------------------------------------
// the below code is from http://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm
////use require directive to load http module and store returned HTTP instance into http variable as follows
//var http = require("http");
//
//http.createServer(function(req,res){
//    // send the HTTP header
//    // HTTP Status: 200 : OK
//    // content type: test/plain
//    res.end('Hello World!\n');
//}).listen(3000);
//
//console.log('Example app listening on port 3000.');