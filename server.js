// Your code here
const http = require('http');

const PORT = 5000;
const body = "<h1>Hello there!</h1>";
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    ${body}
  </body>
  </html>
`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write(responseBody);
    res.end();
});
server.listen(PORT, () => console.log('Server is listening on port', PORT));
