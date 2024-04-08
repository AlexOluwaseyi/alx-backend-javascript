export default function createEmployeesObject(departmentName, employees) {
  const department = {};
  const employeeList = [];
  for (const name of employees) {
    employeeList.push(name);
  }
  department[departmentName] = employeeList;
  return department;
}
