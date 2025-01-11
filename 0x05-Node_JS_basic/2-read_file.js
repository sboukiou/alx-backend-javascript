const { readFileSync } = require('fs');

// function countStudents(path) {
//   let csv;
//   try {
//     csv = readFileSync(path, { encoding: 'utf8' });
//   } catch (e) {
//     throw new Error('Cannot load the database');
//   }
//   const lines = csv.split('\n');
//   const fields = lines[0].split(',');
//   const plainData = lines.slice(1).filter((r) => r.trim().length);
//   const data = [];
//   for (const line of plainData) {
//     const record = {};
//     const recordFields = line.split(',');
//     recordFields.forEach((field, i) => {
//       record[fields[i]] = field.trim();
//     });
//     data.push(record);
//   }
//   console.log('Number of students:', data.length);
//   [...new Set(data.map((e) => e.field))].forEach((field) => {
//     const names = data.filter((e) => e.field === field).map((e) => e.firstname);
//     console.log(
//       `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
//     );
//   });
// }

function countStudents(fileName) {
  const students = {};
  let totalStudents = 0;
  let csv;

  try {
    csv = readFileSync(fileName, { encoding: 'utf8' });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
  const lines = csv.trim().split('\n').slice(1);
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
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(students)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
    );
  }
}

module.exports = countStudents;
