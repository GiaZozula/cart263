/**
Project 2 Prototype
Gia


*/

"use strict";

let viewer1 = {
  x: 400,
  y: 400,
  width: 20,
  height: 20,
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

let dogSound;
let bandSound;
let germansSound;
let voicesSound;

/**
Description of preload
*/
function preload() {
  //All of the audio code was taken from my Project 1
  //preload the individual spatialized sound effects
  dogSound = loadSound(`assets/sounds/bark.mp3`);
  bandSound = loadSound(`assets/sounds/band.mp3`);
  germansSound = loadSound(`assets/sounds/germans.mp3`);
  voicesSound = loadSound(`assets/sounds/voices.mp3`);
}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

  //All of these audio objects were taken from my Project 1
  //adding dogs, layered with a couple park ambience recordings
  let dog = new AudioObject(random(0, width), random(0, height), dogSound);
  audioObjects.push(dog);
}

//adding the marching band
let marchingBand = new AudioObject(
  random(0, width),
  random(0, height),
  bandSound
);
audioObjects.push(marchingBand);

//add some German tourists
let germans = new AudioObject(
  random(0, width),
  random(0, height),
  germansSound
);
audioObjects.push(germans);

//some voices, layered with other ambient sounds
let voices = new AudioObject(random(0, width), random(0, height), voicesSound);
audioObjects.push(voices);

/**
Description of draw()
*/
function draw() {
  background(0);
  viewer1Display();
}

function viewer1Display() {
  push();
  fill(255, 255, 255);
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
