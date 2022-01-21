class SausageDog extends Animal {
  constructor(x, y, image, rotation) {
    super(x, y, image, rotation);

    this.found = false;
    this.rotationSpeed = 0.1;
    this.foundSpeedX = 5;
    this.foundSpeedY = 5;
  }

  update() {
    super.update();

    if (this.found) {
      this.rotation += this.rotationSpeed;
      this.x += this.foundSpeedX;
      this.y += this.foundSpeedY;

      if (this.x >= width || this.x <= 0) {
        this.foundSpeedX = -this.foundSpeedX;
      }

      if (this.y >= height || this.y <= 0) {
        this.foundSpeedY = -this.foundSpeedY;
      }
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
