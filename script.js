// Two separate arrays
const rizzForHer = [
  "Roses are red and you I would never dump, my only question for you is does it clap when you jump?",
  "Violets are blue, to you I would never lie and if you had an OF I would subscribe.",
  "Roses are red I could cook you your favourite dish and the only reward I want is that chocolate starfish",
  "Your smile shines more that all the suns, and if you want i can remove you period cramps for 9 months.",
  //"Roses are red i dont care about the fame and for you i would even pause my online game.",
  //"Do you believe in love at first sight, or should I walk by again?",
  "For you i would win any race, and instead of a trophy i want you to sit on my face.",
  //"Are you a parking ticket? You've got 'fine' written all over you.",
  //"If beauty were time, you'd be an eternity.",
  //"Do you like raisins? How do you feel about a date?",
  // Add more here...
  //"You must be a keyboard — because you're just my type.",
  //"Are you made of copper and tellurium? Because you're Cu-Te."
];

const rizzForHim = [
  "Roses are red our first date would be lit, and if it goes well enough I could bounce on it.",
  "Violets are blue, your heart i would never break it may not be your birthday but i can still give you my cake.",
  "Grass is green and new york is a big city, how about netflix and chill to find out if its grippy.",
  "Feathers float and so does a boat, lets go somewhere private so you can itch the back of my throat.",
  "Water is wet and the ocean is blue how about a show let me throw it back for you.", 
  //"Are you a time traveler? Because I see you in my future.",
  //"Do you play soccer? You look like a keeper.",
  //"If you were a vegetable, you'd be a cute-cumber.",
  //"Are you an interior decorator? Because when I saw you, the room became beautiful.",
  //"I’m not a photographer, but I can picture us together.",
  //"Are you a campfire? Because you're hot and I want s'more.",
  //"Do you have a Band-Aid? I just scraped my knee falling for you."
];

let currentRizzLines = rizzForHer; // default

const rizzPools = new Map();
let lastShownLine = "";

// DOM elements
const rizzLineElement = document.getElementById("rizz-line");
const generateBtn      = document.getElementById("generate-btn");
const categoryHerBtn   = document.getElementById("category-her");
const categoryHimBtn   = document.getElementById("category-him");

function shuffleLines(lines) {
  const shuffled = [...lines];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function getNextRizzLine(lines) {
  if (!rizzPools.has(lines) || rizzPools.get(lines).length === 0) {
    const nextPool = shuffleLines(lines);

    if (nextPool.length > 1 && nextPool[0] === lastShownLine) {
      [nextPool[0], nextPool[1]] = [nextPool[1], nextPool[0]];
    }

    rizzPools.set(lines, nextPool);
  }

  const nextLine = rizzPools.get(lines).pop();
  lastShownLine = nextLine;
  return nextLine;
}

// Set active category
function setCategory(toHer) {
  if (toHer) {
    currentRizzLines = rizzForHer;
    categoryHerBtn.classList.add("active");
    categoryHimBtn.classList.remove("active");
  } else {
    currentRizzLines = rizzForHim;
    categoryHimBtn.classList.add("active");
    categoryHerBtn.classList.remove("active");
  }
  // Show new line right away
  showRandomRizz();
}

// Show random line from current category
function showRandomRizz() {
  if (currentRizzLines.length === 0) {
    rizzLineElement.textContent = "No rizz lines available yet 😅";
    return;
  }

  rizzLineElement.textContent = getNextRizzLine(currentRizzLines);
}

// Event listeners
generateBtn.addEventListener("click", showRandomRizz);
categoryHerBtn.addEventListener("click", () => setCategory(true));
categoryHimBtn.addEventListener("click", () => setCategory(false));

// Start with "For Her" selected and show one line immediately
//setCategory(true);

