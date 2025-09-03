const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js Server!');
});

const port = 3001;
const host = 'localhost';

server.listen(port, host, () => {   
  console.log(`Server running at http://${host}:${port}/`);
});