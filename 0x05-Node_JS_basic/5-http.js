const { createServer } = require('http');
const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  let totalStudents = 0;
  let resp = '';

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        return reject(Error('Cannot load the database'));
      }
      const lines = data.trim().split('\n').slice(1);
      lines.forEach((line) => {
        const [name, , , field] = line.split(',');
        if (field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
          totalStudents += 1;
        }
      });
      resp += `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        resp += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(resp);
    });
  });
}

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' || req.url === '/students/') {
    countStudents(process.argv[2])
      .then((states) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${states}`);
      }).catch(() => {
        res.writeHead(404);
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(port);

module.exports = app;
