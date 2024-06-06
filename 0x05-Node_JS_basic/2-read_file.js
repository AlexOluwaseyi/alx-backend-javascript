// const readline = require('readline');
const fs = require('fs');

fs.readFile('database.csv', (err, data) => {
  if (err) {
    console.error('Cannot load the database');
    throw (err);
  }
  const lines = data.toString().split('\n'); // Split the file content by newline characters
  const lineCount = lines.length - 1;
  console.log(`Number of students: ${lineCount}`);

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
