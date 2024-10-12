/* eslint-disable no-tabs */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(code) {
    if (code instanceof String) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a String');
    }
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (name instanceof String) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
