/**
SPY PROFILE GENERATOR
Gia <3

Generates a randomized spy profile for the user, and password protects it.

perspective is my password :)
*/

"use strict";

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  currentBenefactor: `**REDACTED**`,
  currentTarget: `**REDACTED**`,
  password: `**REDACTED**`,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let lovecraftData = undefined;

let backgroundImg;
let titleImg;
let agentImg;

function preload() {
  instrumentData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`
  );
  objectData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`
  );
  tarotData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
  );
  lovecraftData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/mythology/lovecraft.json`
  );

  titleImg = loadImage(
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=whirl-anim-logo&text=TOP+SECRET!!!&doScale=true&scaleWidth=480&scaleHeight=120&fontname=pistoleer`
  );

  backgroundImg = loadImage(
    `https://media.giphy.com/media/Zvgb12U8GNjvq/giphy.gif`
  );

  agentImg = loadImage(
    `https://media0.giphy.com/media/Lq1R17KZBQfUIhEXLJ/giphy.gif?cid=ecf05e47lrsenuyx3dtpfrrv8y1zx61ndr97vebf2qem3wlw&rid=giphy.gif&ct=g`
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null) {
    let password = prompt(`Agent! What is your password?!`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
      spyProfile.currentBenefactor = data.currentBenefactor;
      spyProfile.currentTarget = data.currentTarget;
    }
  } else {
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Agent! What is your name?!`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  let currentBenefactor = random(lovecraftData.deities);
  spyProfile.currentBenefactor = `${currentBenefactor}`;

  let currentTarget = random(lovecraftData.supernatural_creatures);
  spyProfile.currentTarget = `${currentTarget}`;

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
  push();
  tint(195, 100, 25);
  background(backgroundImg);
  pop();

  fill(195, 100, 25);
  triangle(100, 400, 500, 400, 300, 100);
  fill(255);
  ellipse(300, 150, 140, 50);
  fill(0);
  ellipse(300, 150, 50);

  push();
  image(titleImg, 0, 0, 1000, 800);
  pop();

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}
Current Benefactor: ${spyProfile.currentBenefactor}
Current Target: ${spyProfile.currentTarget}


`;

  push();
  textFont(`Courier, monospace`);
  textSize(30);
  fill(255);
  textAlign(LEFT, TOP);
  text(profile, 100, 500);
  pop();
}

function keyPressed() {
  if (key === `c`) {
    localStorage.removeItem(`spy-profile-data`);
  }
}
