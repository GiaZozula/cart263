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

//this will be used to switch the controls between the two spirits
let searchingSpiritActive = true;
let stationarySpiritActive = false;

let stationarySpirit = {
  x: 0,
  y: 0,
  size: 10,
};
let stationarySpiritHBox1 = {
  x: 0,
  y: 0,
  size: 150,
};

let stationarySpiritHBox2 = {
  x: 0,
  y: 0,
  size: 325,
};

let miniMap = {
  x: 400,
  y: 600,
  boundsXRight: 1050,
  boundsYBottom: 850,
  width: 600,
  height: 450,
};

let miniMapFrame = {
  x: 400,
  y: 590,
  width: 820,
  height: 650,
};

let viewport = {
  x: 1300,
  y: 420,
  width: 400,
  height: 400,
};

let viewportFrame = {
  x: 1300,
  y: 320,
  width: 1300,
  height: 1300,
};

let eyePosition = {
  x: 200,
  y: 100,
  width: 250,
  height: 100,
};

let earPosition = {
  x: 200,
  y: 600,
  width: 250,
  height: 100,
};

//defining audioObjects array and properties
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

//defining an array for clickable "buttons" on the GUI
let buttonImages = [];
let numButtonImages = 2;
let buttonObjects = [];
let numButtonObjects = 2;

//defining the gates covering the viewport
let gateLImg;
let gateL = {
  x: 1298,
  y: 300,
  xClose: 1298,
  xOpen: 950,
  speed: 2,
  width: 775,
  height: 725,
};

let gateRImg;
let gateR = {
  x: 1701,
  y: 300,
  xClose: 1701,
  xOpen: 2050,
  speed: 2,
  width: 775,
  height: 725,
};

//declaring variables for the audio
let voiceSound;

//declaring other assets
let viewportFrameImg;
let miniMapFrameImg;
let darknessImg;
let eyeOpenImg;
let earImg;
let font;

let titleText = "Reunited At Last";

// PRELOAD --------------------------------------------------------------------
function preload() {
  //preload the sounds
  voiceSound = loadSound("assets/sounds/ghostvoice.mp3");

  //preload the image assets (that aren't in arrays)
  darknessImg = loadImage("assets/images/darknessImg.gif");
  eyeOpenImg = loadImage("assets/images/buttonImage0.jpg");
  earImg = loadImage("assets/images/buttonImage1.jpg");
  gateLImg = loadImage("assets/images/gateL.png");
  gateRImg = loadImage("assets/images/gateL.png");
  viewportFrameImg = loadImage("assets/images/viewportframe.png");
  miniMapFrameImg = loadImage("assets/images/minimapframe.png");

  //preload the fonts
  font = loadFont("assets/fonts/font.ttf");

  //preload images that will end up in the foreground in an array
  for (let i = 0; i < numForegroundImages; i++) {
    foregroundImages[i] = loadImage(
      "assets/images/foregroundImage" + i + ".png"
    );
  }

  //preload images that will end up in the background in an array
  for (let i = 0; i < numBackgroundImages; i++) {
    backgroundImages[i] = loadImage(
      "assets/images/backgroundImage" + i + ".gif"
    );
  }
}

//SETUP -----------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

  //The code for the audio object was adapted from my Project 1 code
  let searchingSpirit = new AudioObject(
    random(miniMap.x, miniMap.boundsXRight),
    random(miniMap.y, miniMap.boundsYBottom),
    voiceSound
  );
  audioObjects.push(searchingSpirit);

  //Go through with a for loop and pick at random an image, place it in the "foreground"
  //variable, and then pass that on to the ImageObject
  for (let i = 0; i < numForegroundImages; i++) {
    let foreground = foregroundImages[i];
    let foregroundImage = new ImageObject(
      viewport.x,
      viewport.y,
      foreground,
      viewport.width,
      viewport.height
    );
    foregroundImageObjects.push(foregroundImage);
  }

  //With a for loop, cycle through the backgroundImages array and place the images in the "background"
  //variable, pass that on to the ImageObject along with all other desired properties,
  //and then add to the backgroundImageObjects array
  for (let i = 0; i < numBackgroundImages; i++) {
    let background = backgroundImages[i];
    let backgroundImage = new ImageObject(
      viewport.x,
      viewport.y,
      background,
      viewport.width,
      viewport.height
    );
    backgroundImageObjects.push(backgroundImage);
  }

  //take a button image from the buttonImage array, place it in a variable, and add it to the buttonObjects array
  let eyeButton = new ImageObject(
    eyePosition.x,
    eyePosition.y,
    eyeOpenImg,
    eyePosition.width,
    eyePosition.height,
    "true"
  );
  buttonObjects.push(eyeButton);

  //take a button image from the buttonImage array, place it in a variable, and add it to the buttonObjects array
  let earButton = new ImageObject(
    earPosition.x,
    earPosition.y,
    earImg,
    earPosition.width,
    earPosition.height,
    "false"
  );
  buttonObjects.push(earButton);

  stationarySpiritPosition();
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

  //cycle through the background images array, pull one out, and display it!
  for (let i = 0; i < backgroundImageObjects.length; i++) {
    let imageObject = backgroundImageObjects[i];
    imageObject.display();
  }

  // Go through the foregroundImages array and display the image
  for (let i = 0; i < foregroundImageObjects.length; i++) {
    let imageObject = foregroundImageObjects[i];
    push();
    //using a sinwave, this causes fluctuating opacity for the foreground element
    tint(255, 127 * sin(millis() / 1000));
    imageObject.display();
    pop();
  }

  //for layering purposes, darknessImg needs to be here instead of with the other audioObject functions
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.darknessImgDisplay();
  }

  //display the gate
  // gateDisplay();

  //display the mini map
  miniMapDisplay();

  //display the stationarySpirit (although this will be invisible in the final build, just here for testing purposes)
  stationarySpiritDisplay();

  // // go through the buttonObjects array and begin all necessary functions
  // for (let i = 0; i < buttonObjects.length; i++) {
  //   let buttonObject = buttonObjects[i];
  //   buttonObject.display();
  //   buttonObject.mouseOver();
  //   if (buttonObject.overlap) {
  //     buttonObject.mousePressed();
  //   }
  // }
  // if (!mouseIsPressed) {
  //   gateClose();
  // }

  // Go through the audioObject array and begin all necessary functions
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.play();
    audioObject.userInput();
    audioObject.spatialVolume();
    audioObject.display();
    audioObject.checkOverlap();
  }
  drawHUD();
}

// FUCNTIONS FOR DRAWGAME ----------------------------------------------------

//place the stationarySpirit at a random starting location, along with its two wider hitboxes
function stationarySpiritPosition() {
  stationarySpirit.x = random(miniMap.x, miniMap.boundsXRight);
  stationarySpirit.y = random(miniMap.y, miniMap.boundsYBottom);
  stationarySpiritHBox1.x = stationarySpirit.x;
  stationarySpiritHBox1.y = stationarySpirit.y;
  stationarySpiritHBox2.x = stationarySpirit.x;
  stationarySpiritHBox2.y = stationarySpirit.y;
}

//function for the display of the stationarySpirit (this will be made invisible, only here for testing purposes)
//Also displays all of its hitboxes
function stationarySpiritDisplay() {
  push();
  noStroke();
  fill(150);
  ellipse(
    stationarySpiritHBox2.x,
    stationarySpiritHBox2.y,
    stationarySpiritHBox2.size
  );
  pop();

  push();
  noStroke();
  fill(100);
  ellipse(
    stationarySpiritHBox1.x,
    stationarySpiritHBox1.y,
    stationarySpiritHBox1.size
  );
  pop();

  push();
  noStroke();
  fill(0);
  ellipse(stationarySpirit.x, stationarySpirit.y, stationarySpirit.size);
  pop();
}

//function for the display of the miniMap
function miniMapDisplay() {
  push();
  fill(255);
  rect(miniMap.x, miniMap.y, miniMap.width, miniMap.height);
  pop();
}

//display the Gates
function gateDisplay() {
  image(gateLImg, gateL.x, gateL.y, gateL.width, gateL.height);
  image(gateRImg, gateR.x, gateR.y, gateR.width, gateR.height);
}

//function for the opening movement of the gates
function gateOpen() {
  gateL.x -= gateL.speed;
  if (gateL.x <= gateL.xOpen) {
    gateL.x = gateL.xOpen;
  }

  gateR.x += gateR.speed;
  if (gateR.x >= gateR.xOpen) {
    gateR.x = gateR.xOpen;
  }
}

//function for the closing movement of the gates
function gateClose() {
  gateL.x += gateL.speed;
  if (gateL.x >= gateL.xClose) {
    gateL.x = gateL.xClose;
  }

  gateR.x -= gateR.speed;
  if (gateR.x <= gateR.xClose) {
    gateR.x = gateR.xClose;
  }
}

function drawHUD() {
  image(
    viewportFrameImg,
    viewportFrame.x,
    viewportFrame.y,
    viewportFrame.width,
    viewportFrame.height
  );

  image(
    miniMapFrameImg,
    miniMapFrame.x,
    miniMapFrame.y,
    miniMapFrame.width,
    miniMapFrame.height
  );
}

//DRAWOUTRO -------------------------------------------------------------------
function drawOutro() {
  background(0);
  fill(255);
  textFont(font);
  text("Outro", width / 2, height / 2);
}
