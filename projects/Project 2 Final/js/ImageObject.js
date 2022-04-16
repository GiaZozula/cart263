class ImageObject {
  //These are the properties of the Image Object class
  constructor(x, y, image, width, height, clickable) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.effects = false;
    this.width = width;
    this.height = height;
    this.overlap = false;
    this.clickable = clickable;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
  }

  mouseOver() {
    if (
      mouseX > eyePosition.x - eyePosition.width / 2 &&
      mouseX < eyePosition.x + eyePosition.width / 2 &&
      mouseY > eyePosition.y - eyePosition.height / 2 &&
      mouseY < eyePosition.y + eyePosition.height / 2
    ) {
      this.overlap = true;
    } else {
    }
  }
}
