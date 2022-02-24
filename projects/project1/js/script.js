/**
Project 1 - The Conversation
Gia <3

*/

"use strict";

let dogs = [];
let numDogs = 3;
// let dogSound;

function preload() {
  // dogSound = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);

  //adding Dogs
  for (let i = 0; i < numDogs; i++) {
    let x = random(0, width);
    let y = random(0, height);

    // let sound = dogSound;
    let dog = new Dog(x, y);
    dogs.push(dog);
  }
}

function draw() {
  background(0);

  // Go through the dogs array and display and move each
  for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    dog.display();
    dog.move();
  }

  // let volume = map(dist(mouseX, mouseY, dog.x, dog.y), 0, 250, 1, 0);
  // volume = constrain(volume, 0, 1);
  // dog.sound.setVolume(volume);

  // ellipse(dog.x, dog.y, 100);
  // dog.y += dog.vy;
}

function mousePressed() {
  // dog.sound.loop();
  // dog.vy = 1;
}
