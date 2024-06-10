// const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, (err, data) => {
  if (err) {
    throw new Error('Cannot load the database');
  }
  const lines = data.toString().split('\n');
  const lineCount = lines.length - 1;
  console.log(`Numbers of students: ${lineCount}`);

  const studentsByField = {};
  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line) { // Make sure the line is not empty
      const [firstname, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }
  }
  // eslint-disable-next-line guard-for-in
  for (const field in studentsByField) {
    const students = studentsByField[field];
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
});
}

module.exports = countStudents;
