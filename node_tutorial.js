// console.log("Hello world");

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end("Hello world");
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colors in css</title>
      <style>
          #fstpara{
              color: chartreuse; /*color in by name*/
          }
          #secpara{
              color: rgb(27, 150, 251); /*Color using rgb values */
          }
          #trdpara{
              color: #9f2808; /*color using hexadecimal values */
          }
          #fthpara{
              color: hsl(9, 90, 80);
          }
      </style>
  </head>
  <body>
      <h3>This is my first box</h3>
      <p id="fstpara">This is a paragraph and we are using color in CSS</p>
      <h3>This is my second box</h3>
      <p id="secpara">This is a paragraph and we are using color in CSS</p>
      <h3>This is my third box</h3>
      <p id="trdpara">This is a paragraph and we are using color in CSS</p>
      <h3>This is my fourth box</h3>
      <p id="fthpara">This is a paragraph and we are using color in CSS</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
