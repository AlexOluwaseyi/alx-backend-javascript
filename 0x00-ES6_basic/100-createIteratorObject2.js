export default function createIteratorObject(report) {
  const departments = Object.keys(report);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const department = departments[currentDepartmentIndex];
        const employees = report[department];

        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          currentEmployeeIndex += 1;
          return { value: employee, done: false };
        }
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next(); // Recursive call to move to the next department
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
