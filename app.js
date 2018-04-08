// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/cars') {
        // notice we won't include the utf8 encoding
        fs.readFile('./views/cars.html', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/images/car2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/images/car.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/cats') {
        // notice we won't include the utf8 encoding
        fs.readFile('./views/cats.html', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/images/cat2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/images/cat.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === '/cars/new') {
        // notice we won't include the utf8 encoding
        fs.readFile('./views/new.html', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        })

    }

    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");