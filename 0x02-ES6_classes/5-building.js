export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (!(new.target === Building)) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}

// const building = new Building(15);
// console.log(building);
// console.log(building.sqft);

// class BuildingGood extends Building {
//   // eslint-disable-next-line class-methods-use-this
//   evacuationWarningMessage() {
//     return 'Woof!';
//   }
// }

// class BuildingBad extends Building { }

// const testGood = new BuildingGood();
// const testBad = new BuildingBad();
