// grab express
var express = require('express');
// create an express app 
var app = express();

//  grab and create ig object 
var ig = require('instagram-node').instagram();


// CONFIGURE THE APP
// ================================================== 
// tell node where to look for site resources 
app.use(express.static(__dirname + '/public'));


// set the view engine to ejs 
app.set('view engine', 'ejs');

// configure instagram app with client-id 
// configure instagram app with client_id, client_secret, and access_token 
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '8980536.1677ed0.a45740c58300429fa1349b6f8981e75c' 
});

// SET THE ROUTES
// =================================================== 
// home page route - our profile's images
app.get('/', function(req, res) {

    // res.render('pages/index');

    // use the instagram package to get popular media 
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
    // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias }); 
    });
});


// start the server on port 8080 
app.listen(8080);
// send a message 
console.log('Server has started!');