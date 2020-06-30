// === === === === RPS GAME === === === === //

// Array with Rock Paper Scissors choices
const rpsOpts = ["rock", "paper", "scissors"];

// Choice Generator
const choiceGen = () => {
  return Math.floor(Math.random() * rpsOpts.length);
}

// Comp1 Results
compChoice1 = rpsOpts[choiceGen()];
console.log(compChoice1);

// Comp2 Results
compChoice2 = rpsOpts[choiceGen()];
console.log(compChoice2);


// Results Analyzer
const matchAnalyzer = () => {
  const rpsCombos = ['rock-scissors', 'paper-rock', 'scissors-paper'];
  const rpsChoices = compChoice1 + '-' + compChoice2;
  const results ="";

  if (compChoice1 === compChoice2) {
      console.log("TIE!");
  } else if (rpsCombos.includes(rpsChoices)) {
      console.log("you WIN!");
  } else {
      console.log("AI 2 Wins!..you lose..");
  }

  return results;
}

console.log(matchAnalyzer());
