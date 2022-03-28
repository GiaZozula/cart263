/**
Project 2 Prototype
Gia


*/

"use strict";

let viewer1 = {
  x: 0,
  y: 0,
  size: 200,
};

//defining audioObejcts array and properties
let audioObjects = [];
let numAudioObjects = 4;

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

  //The code for the audio object was adapted from my Project 1 code
  let voice1 = new AudioObject(random(0, width), random(0, height), voiceSound);
  audioObjects.push(voice1);

  viewer1Position();
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
    audioObject.userInput();
    audioObject.spatialVolume();
    audioObject.display();
  }
}

function viewer1Position() {
  viewer1.x = random(height);
  viewer1.y = random(width);
}

function viewer1Display() {
  push();
  noStroke();
  fill(0, 0, 0);
  ellipse(viewer1.x, viewer1.y, viewer1.size);
  pop();
}

//this handles the controls when the user is in Viewer2 mode
