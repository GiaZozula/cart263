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

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);
}

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
