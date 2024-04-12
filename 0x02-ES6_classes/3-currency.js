/* eslint no-underscore-dangle: "off" */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Setter
  set name(value) {
    this._name = value;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter - code
  set code(value) {
    this._code = value;
  }

  // Getter - Code
  get code() {
    return this._code;
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
