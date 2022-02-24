class Dog extends AudioObject {
  //extend the Dog as a child of the AudioObject Parent
  constructor(x, y, sound) {
    super(x, y, sound);
    //Give the dog specific qualities
    this.vx = 2;
    this.vy = 2;
    this.size = 20;
    this.speed = 2;
  }

  //give the dog a shape
  display() {
    ellipse(this.x, this.y, this.size);
  }
}
