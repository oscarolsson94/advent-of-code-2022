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

const getPlayerValue = (outcomeValue, opponentsValue) => {
  if (outcomeValue === 3) return opponentsValue;

  if (!outcomeValue) {
    if (opponentsValue === "A") return "C";
    if (opponentsValue === "B") return "A";
    if (opponentsValue === "C") return "B";
  }

  if (outcomeValue === 6) {
    if (opponentsValue === "A") return "B";
    if (opponentsValue === "B") return "C";
    if (opponentsValue === "C") return "A";
  }
};

battles.forEach((battle) => {
  const manualValue = battle[2];
  const opponentsValue = battle[0];

  const outcomeValue = getSupposedOutcomeValue(manualValue);

  const playerValue = getPlayerValue(outcomeValue, opponentsValue);

  const choiceValue = getChoiceValue(playerValue);

  let roundScore = 0;

  roundScore += choiceValue;

  if (outcomeValue) {
    roundScore += outcomeValue;
  }

  totalScore += roundScore;
});

console.log(totalScore);
