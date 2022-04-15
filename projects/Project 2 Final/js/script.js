/**

██████████████████████████████████████████████████████████████████████████████████████████
█▄─▄▄▀█▄─▄▄─█▄─██─▄█▄─▀█▄─▄█▄─▄█─▄─▄─█▄─▄▄─█▄─▄▄▀████▀▄─██─▄─▄─███▄─▄████▀▄─██─▄▄▄▄█─▄─▄─█
██─▄─▄██─▄█▀██─██─███─█▄▀─███─████─████─▄█▀██─██─████─▀─████─██████─██▀██─▀─██▄▄▄▄─███─███
▀▄▄▀▄▄▀▄▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▀▄▄▀▄▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▀▀▀▀▄▄▀▄▄▀▀▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀

by Gia

Use the regular keyboard controls and attempt to guide the "searching spirit"
to the "stationary spirit".
*/

"use strict";

//GLOBAL VARIABLES ------------------------------------------------------------

let state = "game";

//this timer will be used to move through the intro title cards
let timer;

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

//defining the arrays for foreground images
let foregroundImages = [];
let numForegroundImages = 2;
let foregroundImageObjects = [];
let numForeGroundImageObjects = 2;

//defining the arrays for background images
let backgroundImages = [];
let numBackgroundImages = 2;
let backgroundImageObjects = [];
let numBackgroundImageObjects = 2;

//declaring variables for the audio
let voiceSound;

//declaring other assets
let font;

let titleText = "Reunited At Last";

// PRELOAD --------------------------------------------------------------------
function preload() {
  voiceSound = loadSound(`assets/sounds/ghostvoice.mp3`);

  //preload the fonts
  font = loadFont(`assets/fonts/font.ttf`);

  //preload images that will end up in the foreground in an array
  for (let i = 0; i < numForegroundImages; i++) {
    foregroundImages[i] = loadImage(
      `assets/images/foregroundImage` + i + `.gif`
    );
  }

  //preload images that will end up in the background in an array
  for (let i = 0; i < numBackgroundImages; i++) {
    backgroundImages[i] = loadImage(
      `assets/images/backgroundImage` + i + `.png`
    );
  }
}

//SETUP -----------------------------------------------------------------------
function setup() {
  createCanvas(1000, 800);

  //The code for the audio object was adapted from my Project 1 code
  let voice1 = new AudioObject(
    random(miniMap.x, miniMap.boundsXRight),
    random(miniMap.y, miniMap.boundsYBottom),
    voiceSound
  );
  audioObjects.push(voice1);

  //Go through with a for loop and pick at random an image, place it in the "foreground"
  //variable, and then pass that on to the ImageObject
  for (let i = 0; i < numForegroundImages; i++) {
    let foreground = random(foregroundImages);
    let foregroundImage = new ImageObject(viewport.x, viewport.y, foreground);
    foregroundImageObjects.push(foregroundImage);
  }

  //Go through with a for loop and pick at random an image, place it in the "background"
  //variable, and then pass that on to the ImageObject
  for (let i = 0; i < numBackgroundImages; i++) {
    let background = random(backgroundImages);
    let backgroundImage = new ImageObject(viewport.x, viewport.y, background);
    backgroundImageObjects.push(backgroundImage);
  }

  spirit1Position();
}

//DRAW ------------------------------------------------------------------------
function draw() {
  background(0);

  //State switcher
  if (state === "title") {
    drawTitle();
  } else if (state === "intro") {
    drawIntro();
  } else if (state === "game") {
    drawGame();
  } else if (state === "end") {
    drawEnd();
  }
}

//DRAWTITLE -------------------------------------------------------------------
function drawTitle() {
  background(0);
  fill(255);
  textFont(font);
  text(titleText, width / 2, height / 2);
}

//DRAWINTRO -------------------------------------------------------------------
function drawIntro() {
  background(0);
  fill(255);
  textFont(font);
  text("intro state", width / 2, height / 2);
}

//DRAWGAME --------------------------------------------------------------------
function drawGame() {
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
    audioObject.checkOverlap();
  }

  //cycle through the background images array, pull one out, and display it!
  for (let i = 0; i < backgroundImageObjects.length; i++) {
    let imageObject = backgroundImageObjects[i];
    imageObject.display();
  }

  // Go through the foregroundImages array and display the image
  for (let i = 0; i < foregroundImageObjects.length; i++) {
    let imageObject = foregroundImageObjects[i];
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
  fill(0);
  ellipse(spirit1.x, spirit1.y, spirit1.size);
  pop();
}

function miniMapDisplay() {
  push();
  fill(255);
  rect(miniMap.x, miniMap.y, miniMap.width, miniMap.height);
  pop();
}

//DRAWOUTRO -------------------------------------------------------------------
function drawOutro() {
  background(0);
  fill(255);
  textFont(font);
  text("Outro", width / 2, height / 2);
}
