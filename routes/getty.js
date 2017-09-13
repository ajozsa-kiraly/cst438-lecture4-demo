var express = require('express');
var router = express.Router();

var https = require("https");

// Send a request to getty

const options = {
    hostname: 'api.gettyimages.com',
    port: 443,
    path: '/v3/search/images',
    method: 'GET',
    headers: {
        'Api-Key': 'kqr5bhgtthprr5praaa3nthr'
    }
};

function makeApiRequest(sendBackResponseToBrowser) {
    var apiResponse = '';

// Passing in the function as a parameter. Since it's a callback.
// When we get a response from Getty, do these...


// Listen to the responses. And get chunks
https.get(options, function(response) {
    response.setEncoding('utf8');
    
    
    response.on('data', function(chunk) {
        console.log("Received data: ");
        apiResponse+=chunk;
    });
    
    // This helps determining that we are done receiving chunks
    response.on('end', function() {
        console.log("Status code: " + this.statusCode);
        console.log("Complete response: " + apiResponse);
        
        // Execute callback
        sendBackResponseToBrowser();
    })
    .on("Error", function(e) {
        console.log("Got error: " + e.message)
    })
    
});
}




/* GET home page. */
router.get('/', function(req, res, next) {
    
  //res.render('index', { title: 'Express', className: 'CST438'});
  
  // The callback
  makeApiRequest(function() {
      res.send("hurrah");
  }); // Body of our callback
});

module.exports = router;
