"use strict";
exports.__esModule = true;
var firstStudent = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    location: "San Francisco"
};
var secondStudent = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "San Jose"
};
var studentsList = [firstStudent, secondStudent];
function renderTable(students) {
    var table = document.createElement("table");
    students.forEach(function (student) {
        var row = table.insertRow();
        var firstNameCell = row.insertCell(0);
        var locationCell = row.insertCell(1);
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });
    document.body.appendChild(table);
}
renderTable(studentsList);
