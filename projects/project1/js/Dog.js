class Dog extends AudioObject {
  constructor(x, y) {
    super(x, y);
    this.vx = 2;
    this.vy = 2;
    this.size = 20;
    this.speed = 2;
  }

  display() {
    push();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
