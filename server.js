// Require http module

// Require fs module

// Require minimist module (make sure you install this one via npm).
const http = require('http');
const fs = require('fs');
const minimist = require("minimist")
const argv = minimist(process.argv.slice(2));

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

const port = argv.port || 3000;


// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.

const data = fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
  
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

