/**
Project 2 Prototype
Gia


*/

"use strict";

let viewer1 = {
  x: 400,
  y: 400,
  size: 200,
  userControl: true,
};

//defining audioObejcts array and properties
let audioObjects = [];
let numAudioObjects = 10;

//
let userAudioObject;

let voiceSound;

/**
Description of preload
*/
function preload() {
  voiceSound = loadSound(`assets/sounds/ghostvoice.mp3`);
}
/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

  //The code for these audio objects were adapted from my Project 1 code
  //adding
  let voice1 = new AudioObject(random(0, width), random(0, height), voiceSound);
  audioObjects.push(voice1);
}

/**
Description of draw()
*/
function draw() {
  background(0);
  viewer1Position();

  // Go through the audioObject array and begin all necessary functions
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.play();
    audioObject.userInput();
    audioObject.spatialVolume();
  }
}

function viewer1Position() {
  push();
  fill(255, 255, 255);
  rectMode(CENTER);
  ellipse(viewer1.x, viewer1.y, viewer1.size);
  pop();
}

//this handles the controls when the user is in Viewer2 mode
