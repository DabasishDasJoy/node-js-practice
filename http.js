// Creating raw http model

/* 
    http module helps to work with network functionalities.

*/

const http = require("http");

// create server
/* 
    create server recieves a callback where request and response can be handled
*/
const server = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

/* 
    Server has some default methods to work with.. Such as server.listen. Listen method creates an event to always hear the server with the help of event loop. 
*/

server.listen(3000); //here we can define port for the sever to run...WE can create as many as server within an application
console.log("Listening on port 3000");
