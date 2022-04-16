class ImageObject {
  //These are the properties of the Image Object class
  constructor(x, y, image, width, height) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.effects = false;
    this.width = width;
    this.height = height;
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
