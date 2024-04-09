export default function createIteratorObject(report) {
  let departments = Object.keys(report);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const department = departments[currentDepartmentIndex];
        const employees = report[department];

        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Recursive call to move to the next department
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
