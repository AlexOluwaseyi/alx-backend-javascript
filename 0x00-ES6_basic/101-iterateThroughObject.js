export default function createIteratorObject(report) {
  function* iterator() {
    let result = ''; // Initialize an empty string to accumulate the values
    /* eslint-disable guard-for-in */
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        result += yield `${employee} | `; // Append each yielded value to the string
      }
    }
    console.log(result); // Return the accumulated string when the generator is exhausted
  }

  return iterator();
}
