/* eslint no-underscore-dangle: off */
export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Setter
  set name(value) {
    this._name = value;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set code(value) {
    this._code = value;
  }

  // Getter
  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
