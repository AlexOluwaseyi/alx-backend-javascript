export default function getListStudentIds(studentList) {
  //const studentId = [];
  if (!Array.isArray(studentList)){
    return studentId;
  }
  //for (let i = 0; i < studentList.length; i++){
  //  studentId.push(studentList[i]['id']);
  //}
  //return studentId;
  return studentList.map(student => student.id);
}
