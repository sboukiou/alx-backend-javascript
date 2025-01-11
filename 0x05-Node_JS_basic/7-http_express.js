const express = require('express');
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

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => res.send(`This is the list of our students\n${data}`))
    .catch((e) => res.send(`This is the list of our students\n${e.message}`));
});

app.listen(port, () => { });

module.exports = app;
