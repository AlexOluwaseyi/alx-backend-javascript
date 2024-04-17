export default function getStudentsByLocation(studentList, city) {
  const result = studentList.filter((student) => student.location === city);
  return result;
}
