function getAndPrintHTML () {

    var https = require('https');
    var buffer = '';

    // var requestOptions = {
    //     host: 'sytantris.github.io',
    //     path: '/http-examples/step2.html'
    // };
    
    var options = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

        https.get(options, function (response) {

            response.setEncoding('utf8');

            response.on('data', function (data) {
            //console.log('Chunk Received. Data:', data, '\n');
            buffer += data;
            });
    
            response.on('end', function() {
            console.log('Response stream complete.');
            console.log(buffer);
            });
  
        });
}


getAndPrintHTML();