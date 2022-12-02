const battles = RAW_INPUT.split(/\r?\n/);

let totalScore = 0;

const getChoiceValue = (choice) => {
  if (choice === "A") return 1;
  if (choice === "B") return 2;
  return 3;
};

const getSupposedOutcomeValue = (manualValue) => {
  if (manualValue === "Z") return 6;
  if (manualValue === "Y") return 3;
  return null;
};

const getPlayerChoice = (outcomeValue, opponentsChoice) => {
  if (outcomeValue === 3) return opponentsChoice;

  if (!outcomeValue) {
    if (opponentsChoice === "A") return "C";
    if (opponentsChoice === "B") return "A";
    if (opponentsChoice === "C") return "B";
  }

  if (outcomeValue === 6) {
    if (opponentsChoice === "A") return "B";
    if (opponentsChoice === "B") return "C";
    if (opponentsChoice === "C") return "A";
  }
};

battles.forEach((battle) => {
  const manualValue = battle[2];
  const opponentsChoice = battle[0];

  const outcomeValue = getSupposedOutcomeValue(manualValue);

  const playerChoice = getPlayerChoice(outcomeValue, opponentsChoice);

  const choiceValue = getChoiceValue(playerChoice);

  let roundScore = 0;

  roundScore += choiceValue;

  if (outcomeValue) {
    roundScore += outcomeValue;
  }

  totalScore += roundScore;
});

console.log(totalScore);
