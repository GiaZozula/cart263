/**
Project 2 Prototype
Gia


*/

"use strict";

let viewer1 = {
  x: 400,
  y: 400,
  width: 400,
  height: 400,
  userControl: true,
};

// //this determines which viewer the user is currently in control of
// let viewer1Control = true;
// let viewer2Control = false;

//defining audioObejcts array and properties
let audioObjects = [];
let numAudioObjects = 10;

let userAudioObject;

//defining directions for veiwer1 mode
let north = true;
let south = false;
let east = false;
let west = false;

let bassSound;
let malletsSound;
let raveSound;
let stringSound;
let voiceSound;

/**
Description of preload
*/
function preload() {
  //All of the audio code was taken from my Project 1
  //preload the individual spatialized sound effects
  bassSound = loadSound(`assets/sounds/bass.mp3`);
  malletsSound = loadSound(`assets/sounds/mallets.mp3`);
  raveSound = loadSound(`assets/sounds/rave.mp3`);
  stringSound = loadSound(`assets/sounds/string.mp3`);
  voiceSound = loadSound(`assets/sounds/voice.mp3`);
}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

  //The code for these audio objects were adapted from my Project 1 code
  //adding
  let bass = new AudioObject(random(0, width), random(0, height), bassSound);
  audioObjects.push(bass);

  let mallets = new AudioObject(
    random(0, width),
    random(0, height),
    malletsSound
  );
  audioObjects.push(mallets);

  //add some German tourists
  let rave = new AudioObject(random(0, width), random(0, height), raveSound);
  audioObjects.push(rave);

  //some voices, layered with other ambient sounds
  let string = new AudioObject(
    random(0, width),
    random(0, height),
    stringSound
  );
  audioObjects.push(string);

  //some voices, layered with other ambient sounds
  let voice = new AudioObject(random(0, width), random(0, height), voiceSound);
  audioObjects.push(voice);
}

/**
Description of draw()
*/
function draw() {
  background(0);
  viewer1Display();

  // Go through the audioObject array and begin all necessary functions
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.play();
    audioObject.move();
    audioObject.spatialVolume();
  }
}

function viewer1Display() {
  push();
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(viewer1.x, viewer1.y, viewer1.width, viewer1.height);
  pop();
}

//this handles the controls when the user is in Viewer1 mode
function viewer1Input() {
  if (keyIsDown(RIGHT_ARROW)) {
  } else if (keyIsDown(LEFT_ARROW)) {
  }
}

//this handles the controls when the user is in Viewer2 mode
function viewer2Input() {
  if (keyIsDown(RIGHT_ARROW)) {
  } else if (keyIsDown(LEFT_ARROW)) {
  } else if (keyIsDown(UP_ARROW)) {
  } else if (keyIsDown(DOWN_ARROW)) {
  }
}
