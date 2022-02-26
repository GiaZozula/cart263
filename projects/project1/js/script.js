/**
Project 1 - The Conversation
Gia <3

*/

"use strict";

let state = "title";
let backgroundImg;
let themeSong = {
  isplaying: false,
};

let font;

let dogs = [];
let numDogs = 3;
let dogSound;
let dogSound2;

let people = [];
let numPeople = 20;
let peopleSound;
let peopleSound2;
let peopleSound3;
let peopleSound4;

function preload() {
  themeSong = loadSound(`assets/sounds/themesong.mp3`);

  font = loadFont(`assets/fonts/font.ttf`);

  backgroundImg = loadImage(`assets/images/background.png`);
  dogSound = loadSound(`assets/sounds/bark.wav`);
  dogSound2 = loadSound(`assets/sounds/bark2.wav`);
}

function setup() {
  createCanvas(1920, 800);

  //adding Dogs
  let x = random(0, width);
  let y = random(0, height);
  let sound = dogSound;
  let dog = new Dog(x, y, sound);
  dogs.push(dog);

  let dog2 = new Dog(random(0, width), random(0, height), dogSound2);
  dogs.push(dog2);
}

function draw() {
  //State switching !
  if (state === "title") {
    drawTitle();
  } else if (state === "game") {
    drawGame();
  } else if (state === "end") {
    drawEnd();
  }
}

function drawTitle() {
  background(125);

  if (!themeSong.isplaying) {
    themeSong.loop();
    themeSong.isplaying = true;
  }
}

function drawGame() {
  background(backgroundImg);
  themeSong.stop();

  // Go through the dogs array and display and move each
  for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    dog.display();
    dog.move();
    dog.mouseOver();
    dog.spatialVolume();
  }
}

function mousePressed() {}

function spatialVolume() {}
