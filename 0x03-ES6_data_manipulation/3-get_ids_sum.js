export default function getStudentIdsSum(studentList) {
  const result = studentList.reduce((acc, curr) => acc + curr.id, 0);
  console.log(result);
}
