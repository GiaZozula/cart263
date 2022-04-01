/**
Desperately Seeking Happiness PLUSSS PLUSSS
Gia

In a hard world, a lil' emoji desperately searches for some happiness in the form
of a shitty clip art image depicting a smiling sun sitting on a rainbow.

Rainy days try and get in the way, but thankfully the emoji is medicated.
A pill helps clear a path to happiness.

In the end, however, there's nothing like some cute animal pics to bring out a smile.
Life's greatest reward.

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
