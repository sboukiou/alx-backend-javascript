/* eslint-disable no-tabs */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (code instanceof String) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a String');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name instanceof String) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
