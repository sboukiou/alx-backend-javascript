export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new this.constructor();
  }
}

// class TestCar extends Car { }

// const tc1 = new TestCar("Nissan", "Turbo", "Pink");
// const tc2 = tc1.cloneCar();

// console.log(tc1);
// console.log(tc1 instanceof TestCar);

// console.log(tc2);
// console.log(tc2 instanceof TestCar);

// console.log(tc1 === tc2);
