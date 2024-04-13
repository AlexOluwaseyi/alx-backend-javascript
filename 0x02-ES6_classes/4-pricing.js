/* eslint no-underscore-dangle: "off" */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be a number');
    }
  }

  // Setter
  set amount(value) {
    this._amount = value;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  // Setter
  set currency(value) {
    this._currency = value;
  }

  // Getter
  get currency() {
    return this._currency;
  }

  // Method displayFullPrice
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method convertPrice
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be a number');
    } else if (typeof (conversionRate) !== 'number') {
      throw new TypeError('conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}
