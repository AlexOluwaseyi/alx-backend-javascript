/* eslint no-underscore-dangle: "off" */
export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('SQFT must be a number');
    }
    if (this.constructor.name !== 'Building') {
      if (!Object.prototype.hasOwnProperty.call(this.constructor.prototype, 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Setter
  set sqft(value) {
    this._sqft = value;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Evacuation method for abstract class
  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
