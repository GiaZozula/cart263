/**
Slamina New Game ++
Gia

This is my submission for the Slamina new game plus exercise.
I have added start and end screens,
more visual flair when the answer is right or wrong,
and sound effects when the answer is right or wrong.
*/

"use strict";

const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra",
];

let currentAnimal = ``;
let currentAnswer = ``;
let state = "title";

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  if (annyang) {
    let commands = {
      "I think it is *animal": guessAnimal,
    };

    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

/**
Description of draw()
*/
function draw() {
  //switch those states
  if (state === "title") {
    drawTitle();
  } else if (state === "game") {
    drawGame();
  } else if (state === `end`) {
    drawEnd();
  }

  //draw title ---------------------------------------

  function drawTitle() {
    background(0);
    fill(255);
    text(
      `I have one question for you. Click to continue.`,
      windowWidth / 2,
      windowHeight / 2
    );
  }

  function drawGame() {
    background(0);
    text(`I just said an animal backwards. What animal was it?`);

    //check if the answer is correct
    if (currentAnswer === currentAnimal) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    text(currentAnswer, width / 2, height / 2);
  }
}

function mousePressed() {
  //check if we're out of the title screen
  if (state === "game") {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal);
  } // if not, lets get there
  else state = "game";
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split("");
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join("");
  // Return the result
  return result;
}
