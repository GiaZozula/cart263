//This code was taken from my Project 1
class AudioObject {
  //basic properties of the AudioObject class
  constructor(x, y, sound) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.boundsXLeft = 599;
    this.boundsXRight = 949;
    this.boundsYLeft = 249;
    this.boundsYBottom = 749;
    this.sound = sound;
    this.size = 7;
    this.speed = 0.75;
    this.changeDirection = 0.2;
    this.isPlaying = false;
  }

  //check to see if it is playing!
  play() {
    if (!this.isPlaying) {
      this.sound.loop();
      this.isPlaying = true;
    }
  }

  //adding a stop sound ability for the end state
  stopSound() {
    if (this.isPlaying) {
      this.sound.stop();
      this.isPlaying = false;
    }
  }

  //keyboard controls for movement
  userInput() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vx = 0;
      this.vy = 0;
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //adding the boundaries of the minimap
    if (this.x < this.boundsXLeft) {
      this.x = this.boundsXLeft;
    } else if (this.x > this.boundsXRight) {
      this.x = this.boundsXRight;
    } else if (this.y < this.boundsYLeft) {
      this.y = this.boundsYLeft;
    } else if (this.y > this.boundsYBottom) {
      this.y = this.boundsYBottom;
    }
  }
  //Pippin's wonderful code that got me started on spatial audio
  spatialVolume() {
    let volume = map(dist(spirit1.x, spirit1.y, this.x, this.y), 0, 250, 1, 0);
    volume = constrain(volume, 0, 1);
    this.sound.setVolume(volume);
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
}
