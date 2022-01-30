/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let on = false;

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      "turn the light on": function () {
        on = true;
      },
      "turn the light off": function () {
        on = false;
      },
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

/**
Description of draw()
*/
function draw() {
  if (on) {
    background(255);
  } else {
    background(0);
  }
}
