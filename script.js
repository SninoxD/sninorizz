// Two separate arrays
const rizzForHer = [
  "Roses are red and you I would never dump, my only question for you is does it clap when you jump?",
  "Violets are blue, to you I would never lie and if you had an OF I would subscribe.",
  "Roses are red I could cook your favourite dish and the only reward I want is that chocolate starfish",
  "Your smile shines more that all the suns, and if you want i can remove you period cramps for 9 months.",
  "Roses are red i dont care about the fame and for you i would even pause my online game.",
  //"Do you believe in love at first sight, or should I walk by again?",
  "For you i would win any race, and instead of a trophy i want you to sit on my face",
  //"Are you a parking ticket? You've got 'fine' written all over you.",
  //"If beauty were time, you'd be an eternity.",
  //"Do you like raisins? How do you feel about a date?",
  // Add more here...
  //"You must be a keyboard — because you're just my type.",
  //"Are you made of copper and tellurium? Because you're Cu-Te."
];

const rizzForHim = [
  "Are you a bank loan? Because you’ve got my interest.",
  "Do you have a name, or can I call you mine?",
  "Are you a charger? Because I'm dying without you.",
  "Is your name Google? Because you've got everything I've been searching for.",
  "Excuse me, but I think you dropped something: my jaw.",
  "Are you a time traveler? Because I see you in my future.",
  "Do you play soccer? You look like a keeper.",
  "If you were a vegetable, you'd be a cute-cumber.",
  "Are you an interior decorator? Because when I saw you, the room became beautiful.",
  "I’m not a photographer, but I can picture us together.",
  "Are you a campfire? Because you're hot and I want s'more.",
  "Do you have a Band-Aid? I just scraped my knee falling for you."
];

let currentRizzLines = rizzForHer; // default

// DOM elements
const rizzLineElement = document.getElementById("rizz-line");
const generateBtn      = document.getElementById("generate-btn");
const categoryHerBtn   = document.getElementById("category-her");
const categoryHimBtn   = document.getElementById("category-him");

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
  const randomIndex = Math.floor(Math.random() * currentRizzLines.length);
  rizzLineElement.textContent = currentRizzLines[randomIndex];
}

// Event listeners
generateBtn.addEventListener("click", showRandomRizz);
categoryHerBtn.addEventListener("click", () => setCategory(true));
categoryHimBtn.addEventListener("click", () => setCategory(false));

// Start with "For Her" selected and show one line immediately
setCategory(true);