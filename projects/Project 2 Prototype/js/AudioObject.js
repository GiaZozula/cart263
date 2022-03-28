//This code was taken from my Project 1
class AudioObject {
  //basic properties of the AudioObject class
  constructor(x, y, sound) {
    this.x = x;
    this.y = y;
    this.vx = 2;
    this.vy = 2;
    this.sound = sound;
    this.size = 100;
    this.speed = 10.25;
    this.changeDirection = 1;
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

  //Pippin's wonderful code that got me started on spatial audio
  spatialVolume() {
    let volume = map(dist(viewer1.x, viewer1.y, this.x, this.y), 0, 250, 1, 0);
    volume = constrain(volume, 0.25, 1);
    this.sound.setVolume(volume);
  }
}
