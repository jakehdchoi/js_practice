// Static Methods in JavaScript Tutorial : Object Oriented Programming Series - Part 11
// techsith
// https://www.youtube.com/watch?v=10b6K9fORI4

class Car_1 {
  constructor(color, price) {
    Object.assign(this, { color, price });
  }
  static comparePrice(car1, car2) {
    return Math.abs(car1.price - car2.price);
  }

  getColor() {
    return this.color;
  }
}

const redCar = new Car_1("red", 100);
const blueCar = new Car_1("blue", 102);

console.log(Car_1.comparePrice(redCar, blueCar)); // 2
console.log(redCar.getColor()); // red

//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//

class Car_2 {
  constructor(price) {
    this.price = price;
  }
  static sellCar(car) {
    return `selling for ${car.price}`;
  }
}

class Toyota extends Car_2 {
  constructor(price) {
    super(price);
  }
  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}

const camry = new Toyota(100);

console.log(Toyota.sellCar(camry)); // Toyota selling for 100
