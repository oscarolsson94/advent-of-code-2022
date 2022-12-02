const battles = RAW_INPUT.split(/\r?\n/);

let totalScore = 0;

const checkWinner = (opponentsValue, playerValue) => {
  if (
    (opponentsValue === "A" && playerValue === "X") ||
    (opponentsValue === "B" && playerValue === "Y") ||
    (opponentsValue === "C" && playerValue === "Z")
  )
    return "draw";

  if (
    (opponentsValue === "A" && playerValue === "Y") ||
    (opponentsValue === "B" && playerValue === "Z") ||
    (opponentsValue === "C" && playerValue === "X")
  )
    return "win";

  return "lost";
};

const getChoiceValue = (choice) => {
  if (choice === "X") return 1;
  if (choice === "Y") return 2;
  return 3;
};

const getOutcomeValue = (outcome) => {
  if (outcome === "draw") return 3;
  if (outcome === "win") return 6;
  return null;
};

battles.forEach((battle) => {
  const playerValue = battle[2];
  const opponentsValue = battle[0];

  const choiceValue = getChoiceValue(playerValue);

  const result = checkWinner(opponentsValue, playerValue);

  const outcomeValue = getOutcomeValue(result);

  let roundScore = 0;

  roundScore += choiceValue;

  if (outcomeValue) {
    roundScore += outcomeValue;
  }

  totalScore += roundScore;
});

console.log(totalScore);
