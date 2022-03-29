class ImageObject {
  //These are the properties of the Image Object class
  constructor(x, y, image) {
    this.x = 50;
    this.y = 50;
    this.image = image;
    this.effects = false;
    this.width = 525;
    this.height = 525;
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
