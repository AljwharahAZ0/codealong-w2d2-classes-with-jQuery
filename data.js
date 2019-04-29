class Vehicle {
  constructor(type, color, model) {
    this.type = type;
    this.color = color;
    this.model = model;
    this.speed = 0;
  }
  honkHorn() {
    return 'beep beep';
  }
  identifySelf() {
    return `Hi I am a ${this.type}, I am the color ${this.color}`;
  }
  accelerate(kmh) {
    this.speed += kmh;
  }
  decelerate(kmh) {
    this.speed -= kmh;
  }
  slamBrakes() {
    console.log('SCREEEEECH');
    this.speed = 0;
  }
  saySpeed() {
    return this.speed;
  }
}

var gsxr = new Vehicle('motorcycle', 'yellow', 'GSXR');
var beatle = new Vehicle('car', 'green', 'beatle');
var f150 = new Vehicle('truck', 'red', 'F150');