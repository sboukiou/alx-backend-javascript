const { readFile } = require('fs');

export default function readDatabase(path) {
  const students = {};

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    readFile(path, 'utf-8', (error, data) => {
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
        }
      });

      // resp += `Number of students: ${totalStudents}\n`;
      // for (const [field, names] of Object.entries(students)) {
      //   resp += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      // }
      resolve(students);
    });
  });
}
