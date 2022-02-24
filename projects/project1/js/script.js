/**
Project 1 - The Conversation
Gia <3

*/

"use strict";

let dog = {
  x: 100,
  y: 0,
  vy: 0,
  sound: undefined,
};

function preload() {
  dog.sound = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let volume = map(dist(mouseX, mouseY, dog.x, dog.y), 0, 250, 1, 0);
  volume = constrain(volume, 0, 1);
  dog.sound.setVolume(volume);

  ellipse(dog.x, dog.y, 100);
  dog.y += dog.vy;
}

function mousePressed() {
  dog.sound.loop();
  dog.vy = 1;
}
