/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const result = studentList.filter((student) => student.location === city);

  const newList = result.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (foundGrade) {
      student.grade = foundGrade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });

  return newList;
}
