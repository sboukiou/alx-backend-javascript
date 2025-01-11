const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port);

module.exports = app;
