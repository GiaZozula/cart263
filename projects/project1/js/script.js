/**
Project 1 - The Conversation
Gia <3

*/

"use strict";

let state = "game";

let themeSong = {
  isplaying: false,
};

let font;
let titleImg;

let ambientSound = {
  isplaying: false,
};

let backgroundImg;
let endImg;

let audioObjects = [];
let numAudioObjects = 10;

let convoObjects = [];
let numConvoObjects = 1;
let convoSound;
let convoImg;

//these are the individual sound sources that will be loaded with specific sound files
let dogSound;
let dogSound2;
let bandSound;
let germansSound;
let basketballSound;
let voicesSound;
let skatersSound;

function preload() {
  themeSong = loadSound(`assets/sounds/themesong.mp3`);

  font = loadFont(`assets/fonts/font.ttf`);

  titleImg = loadImage(`assets/images/titleImg.png`);
  backgroundImg = loadImage(`assets/images/background.png`);
  convoImg = loadImage(`assets/images/convoImg.gif`);
  endImg = loadImage(`assets/images/end.png`);

  //preload a general, background ambience
  ambientSound = loadSound(`assets/sounds/ambientsound.mp3`);

  //preload the conversation
  convoSound = loadSound(`assets/sounds/theconvo.mp3`);

  //preload the individual spatialized sound effects
  dogSound = loadSound(`assets/sounds/bark.mp3`);
  dogSound2 = loadSound(`assets/sounds/bark2.mp3`);
  bandSound = loadSound(`assets/sounds/band.mp3`);
  germansSound = loadSound(`assets/sounds/germans.mp3`);
  basketballSound = loadSound(`assets/sounds/basketball.mp3`);
  voicesSound = loadSound(`assets/sounds/voices.mp3`);
  skatersSound = loadSound(`assets/sounds/skaters.mp3`);
}

function setup() {
  createCanvas(800, 600);
  textFont(font);

  //set up the conversation as an audio object
  let theConvo = new ConvoObject(
    random(0, width),
    random(0, height),
    convoSound
  );
  convoObjects.push(theConvo);

  //adding dogs, layered with a couple park ambience recordings
  let dog = new AudioObject(random(0, width), random(0, height), dogSound);
  audioObjects.push(dog);

  //adding more dogs, layered with a couple park ambience recordings
  let dog2 = new AudioObject(random(0, width), random(0, height), dogSound2);
  audioObjects.push(dog2);

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

  //basketball!
  let bball = new AudioObject(
    random(0, width),
    random(0, height),
    basketballSound
  );
  audioObjects.push(bball);

  //some voices, layered with other ambient sounds
  let voices = new AudioObject(
    random(0, width),
    random(0, height),
    voicesSound
  );
  audioObjects.push(voices);

  //skaters, layered with some voices and park ambience
  let skaters = new AudioObject(
    random(0, width),
    random(0, height),
    skatersSound
  );
  audioObjects.push(skaters);
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
  background(titleImg);
  push();
  textSize(40);
  text("The Conversation - an interactive scene from the film", 0, 0);
  pop();

  //make sure to only play the theme song as a single loop
  if (!themeSong.isplaying) {
    themeSong.loop();
    themeSong.isplaying = true;
  }
}

function drawGame() {
  background(backgroundImg);
  themeSong.stop();

  //make sure to only play the ambient sound as a single loop
  if (!ambientSound.isplaying) {
    ambientSound.loop();
    ambientSound.isplaying = true;
  }

  // Display the ConvoObject
  for (let i = 0; i < convoObjects.length; i++) {
    let convoObject = convoObjects[i];
    convoObject.play();
    convoObject.move();
    convoObject.mouseOver();
    convoObject.spatialVolume();
  }

  // Go through the audioObject array and display and move each
  for (let i = 0; i < audioObjects.length; i++) {
    let audioObject = audioObjects[i];
    audioObject.play();
    audioObject.move();
    audioObject.spatialVolume();
  }
}

function drawEnd() {
  background(endImg);
}
