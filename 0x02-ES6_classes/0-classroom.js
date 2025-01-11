export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

// console.log(ClassRoom.prototype.constructor === ClassRoom); // true
// console.log(Object.getOwnPropertyNames(ClassRoom.prototype));
// const room = new ClassRoom('R4');
// console.log(room._maxStudentsSize);
