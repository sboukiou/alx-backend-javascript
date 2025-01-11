export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (value instanceof Array) {
      for (const element of value) {
        if (!(typeof element === 'string')) {
          throw TypeError('Students must be an array of strings');
        }
        this._students = value;
      }
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
