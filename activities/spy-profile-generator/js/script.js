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
  safeHouseLocation: `**REDACTED**`,
  currentBenefactor: `**REDACTED**`,
  currentTarget: `**REDACTED**`,
  password: `**REDACTED**`,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let countriesData = undefined;
let richPeopleData = undefined;
let corporationsData = undefined;
let secretSocietiesData = undefined;

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
  countriesData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries_with_capitals.json`
  );
  richpeopleData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/richpeople.json`
  );
  corporationsData = loadJSON(
    `https://github.com/dariusk/corpora/blob/master/data/corporations/fortune500.json`
  );
  secretSocietiesData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/societies_and_groups/semi_secret.json`
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
      spyProfile.safeHouseLocation = data.safeHouseLocation;
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
  let safeHouse = random(countriesData.countries);
  spyProfile.safeHouseLocation = `${safeHouse}`;
  let currentBenefactor = random(richpeopleData.richPeople.name);
  spyProfile.currentBenefactor = `${currentBenefactor}`;
  let benefactorOrg = random(secretSocietiesData);
  spyProfile.benefactorOrg = `${benefactorOrg}`;
  let currentTarget = random(richpeopleData.richPeople.name);
  spyProfile.currentTarget = `${currentTarget}`;
  let targetOrg = random(corporationsData.companies);
  spyProfile.targetOrg = `${targetOrg}`;

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
  background(255);

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}
Safe House Location: ${spyProfile.safeHouseLocation}
Current Benefactor: ${spyProfile.currentBenefactor}
Benefactor Organization:
Current Target: ${spyProfile.currentTarget}
Target Organization:

`;

  push();
  textFont(`Courier, monospace`);
  text(24);
  fill(0);
  textAlign(LEFT, TOP);
  text(profile, 100, 100);
  pop();
}
