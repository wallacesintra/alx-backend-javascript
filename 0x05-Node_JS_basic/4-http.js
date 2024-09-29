/**
 *
    * It should be assigned to the variable app and this one must be exported
    * HTTP server should listen on port 1245
    * Displays Hello Holberton School! in the page body for any endpoint as plain text
 */

const http = require('http');

const app = http.createServer();

// eslint-disable-next-line no-unused-vars
app.on('request', (res, _) => {
  const text = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode(200);
  res.write(Buffer.from(text));
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('....');
});
