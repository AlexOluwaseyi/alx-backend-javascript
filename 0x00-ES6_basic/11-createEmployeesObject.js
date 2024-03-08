export default function createEmployeesObject(departmentName, employees) {
  const department = {}
  const employee_list = []
  for (const name of employees){
   employee_list.push(name); 
  }
   department[departmentName] = employee_list;
   return department;
}
