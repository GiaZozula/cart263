/**
Project 1 - The Conversation
Gia <3

*/

"use strict";

let state = "game";
let backgroundImg;
let themeSong = {
  isplaying: false,
};

let font;

let ambientSound = {
  isplaying: false,
};

let audioObjects = [];
let numAudioObjects = 10;

let dogSound;
let dogSound2;
let bandSound;

function preload() {
  themeSong = loadSound(`assets/sounds/themesong.mp3`);

  font = loadFont(`assets/fonts/font.ttf`);

  backgroundImg = loadImage(`assets/images/background.png`);

  ambientSound = loadSound(`assets/sounds/ambientsound.mp3`);

  dogSound = loadSound(`assets/sounds/bark.wav`);
  dogSound2 = loadSound(`assets/sounds/bark2.wav`);

  bandSound = loadSound(`assets/sounds/band.mp3`);
}

function setup() {
  createCanvas(1920, 800);

  //adding Dogs
  let x = random(0, width);
  let y = random(0, height);
  let sound = dogSound;
  let dog = new AudioObject(x, y, sound);
  audioObjects.push(dog);

  let dog2 = new AudioObject(random(0, width), random(0, height), dogSound2);
  audioObjects.push(dog2);
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

  if (!ambientSound.isplaying) {
    ambientSound.loop();
    ambientSound.isplaying = true;
  }

  // Go through the dogs array and display and move each
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.display();
    audioObject.move();
    audioObject.mouseOver();
    audioObject.spatialVolume();
  }
}

function mousePressed() {}

function spatialVolume() {}
