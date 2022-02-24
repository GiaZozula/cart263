class AudioObject {
  //basic properties of the AudioObject class
  constructor(x, y, size, sound) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.sound = undefined;
    this.size = undefined;
    this.speed = 0;
    this.changeDirection = 0.2;
  }

  move() {
    // First have a randomized chance of direction change
    let r = random(0, 1);
    if (r < this.changeDirection) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // add the velocity to the positon to get move the object
    this.x += this.vx;
    this.y += this.vy;

    // Constrain to the bounds of the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  //this will be defined in each child class
  display() {}

  mouseOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
      console.log("hover over");
    }
  }
}
