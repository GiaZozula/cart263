class ImageObject {
  //These are the properties of the Image Object class
  constructor(x, y, image, width, height, gate) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = width;
    this.height = height;
    this.overlap = false;
    this.isGate = gate;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
  }

  mouseOver() {
    if (
      mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2
    ) {
      this.overlap = true;
      console.log("mouseOverButton");
    } else {
      this.overlap = false;
    }
  }

  mousePressed() {
    console.log("clickin");
    if (this.overlap && this.isGate) {
      gateOpen();
    }
  }
}
