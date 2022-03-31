/**
Desperately Seeking Happiness PLUSSS PLUSSS
Gia

In a hard world, one lil' emoji desperately searches for some happiness.

Thankfully the emoji is medicated, which means the path to happiness is
easier to achieve!

*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`,
  },
  scene: [Boot, Play],
};

let game = new Phaser.Game(config);
