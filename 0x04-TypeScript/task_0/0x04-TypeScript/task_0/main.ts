interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student{
  firstName: "John",
  lastName: "Doe",
  age: 28,
  location: "San Francisco",
};
const student2: Student{
  firstName: "John",
  lastName: "Doe",
  age: 28,
  location: "San Francisco",
};

let studentsList: Studnet[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement("table");

  students.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
