/* eslint no-underscore-dangle: off */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, model, color, range) {
    super(brand, model, color);
    this._range = range;
  }

  /* eslint class-methods-use-this: off */
  cloneCar() {
    const parentCar = new Car();
    return parentCar;
  }
}
