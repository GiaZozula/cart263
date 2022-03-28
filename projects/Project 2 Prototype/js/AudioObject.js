//This code was taken from my Project 1
class AudioObject {
  //basic properties of the AudioObject class
  constructor(x, y, sound) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.sound = sound;
    this.size = 200;
    this.speed = 3.25;
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

  //adding a stop ability for the end state
  stop() {
    if (this.isPlaying) {
      this.sound.stop();
      this.isPlaying = false;
    }
  }

  userInput() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.vy = this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = -this.speed;
    } else {
      this.vx = 0;
      this.vy = 0;
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  //Pippin's wonderful code that got me started on spatial audio
  spatialVolume() {
    let volume = map(dist(viewer1.x, viewer1.y, this.x, this.y), 0, 250, 1, 0);
    volume = constrain(volume, 0, 1);
    this.sound.setVolume(volume);
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
}
