var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

 

function getHTML (options, callback) {

  var https = require('https');
  var buffer = '';
  
    https.get(options, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
        //console.log('Chunk Received. Data:', data, '\n');
        buffer += data;
        });

        response.on('end', function() {
        console.log('Response stream complete.');
        callback(buffer);
        });

    });
  
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  getHTML(options, printHTML)
