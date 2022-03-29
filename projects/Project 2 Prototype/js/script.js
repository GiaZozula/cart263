/**
Project 2 Prototype
Gia


*/

"use strict";

let spirit1 = {
  x: 0,
  y: 0,
  size: 10,
};

let miniMap = {
  x: 600,
  y: 250,
  boundsXRight: 950,
  boundsYBottom: 550,
  width: 350,
  height: 500,
};

let viewport = {
  x: 50,
  y: 50,
  width: 600,
  height: 600,
};

//defining audioObejcts array and properties
let audioObjects = [];
let numAudioObjects = 4;

//defining the array for foreground images
let foregroundImages = [];
let numForegroundImages = 2;

//defining the array for background images
let backgroundImages = [];
let numBackgroundImages = 2;
let backgroundImageObjects = [];
let numBackgroundImageObjects = 2;

//declaring variables for the audio
let voiceSound;

//declaring variables for the images
let grassImage;
let mountainImage;

/**
Description of preload
*/
function preload() {
  voiceSound = loadSound(`assets/sounds/ghostvoice.mp3`);

  //images that will end up in the foreground
  grassImage = loadImage(`assets/images/grass.gif`);
  mountainImage = loadImage(`assets/images/mountain.gif`);

  //preload images that will end up in the background in an array
  for (let i = 0; i < numBackgroundImages; i++) {
    backgroundImages[i] = loadImage(
      `assets/images/backgroundImage` + i + `.png`
    );
  }
}
/**
Description of setup
*/
function setup() {
  createCanvas(1000, 800);

  //The code for the audio object was adapted from my Project 1 code
  let voice1 = new AudioObject(
    random(miniMap.x, miniMap.boundsXRight),
    random(miniMap.y, miniMap.boundsYBottom),
    voiceSound
  );
  audioObjects.push(voice1);

  //populating the foregroundImages array
  let foregroundImage1 = new ImageObject(viewport.x, viewport.y, grassImage);
  foregroundImages.push(foregroundImage1);

  //Go through with a for loop and pick at random an image, place it in the "background"
  //variable, and then pass that on to the ImageObject
  for (let i = 0; i < numBackgroundImages; i++) {
    let background = random(backgroundImages);
    let backgroundImage = new ImageObject(viewport.x, viewport.y, background);
    backgroundImageObjects.push(backgroundImage);
  }

  spirit1Position();
}

/**
Description of draw()
*/
function draw() {
  background(0);

  miniMapDisplay();
  spirit1Display();
  // Go through the audioObject array and begin all necessary functions
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.play();
    audioObject.userInput();
    audioObject.spatialVolume();
    audioObject.display();
  }

  //cycle through the background images array, pull one out, and display it!
  for (let i = 0; i < backgroundImageObjects.length; i++) {
    let imageObject = backgroundImageObjects[i];
    imageObject.display();
  }

  // Go through the foregroundImages array and display the image
  for (let i = 0; i < foregroundImages.length; i++) {
    let imageObject = foregroundImages[i];
    imageObject.display();
  }
}

function spirit1Position() {
  spirit1.x = random(miniMap.x, miniMap.boundsXRight);
  spirit1.y = random(miniMap.y, miniMap.boundsYBottom);
}

function spirit1Display() {
  push();
  noStroke();
  fill(255);
  ellipse(spirit1.x, spirit1.y, spirit1.size);
  pop();
}

function miniMapDisplay() {
  push();
  fill(255);
  rect(miniMap.x, miniMap.y, miniMap.width, miniMap.height);
  pop();
}
