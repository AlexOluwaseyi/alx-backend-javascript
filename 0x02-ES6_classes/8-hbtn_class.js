/* eslint no-underscore-dangle: off */
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  // Cast to a Number (returns the size)
  valueOf() {
    return this._size;
  }

  // Cast to a String (returns the location)
  toString() {
    return this._location;
  }
}
