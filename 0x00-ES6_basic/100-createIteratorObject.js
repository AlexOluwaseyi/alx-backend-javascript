export default function createIteratorObject(report) {
  function* iterator() {
    /* eslint-disable guard-for-in */
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return iterator();
}
