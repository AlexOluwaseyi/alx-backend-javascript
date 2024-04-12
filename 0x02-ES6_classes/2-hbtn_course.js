/* eslint no-underscore-dangle: "off" */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._length !== 'number' || this._length <= 0) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(this._students)) {
      throw new TypeError('Students must be an array of strings');
    }
    for (const student of this._students) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
  }

  // getter
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._student;
  }

  // setter
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || newLength <= 0) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array of strings');
    }
    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
    this._students = newStudents;
  }
}
