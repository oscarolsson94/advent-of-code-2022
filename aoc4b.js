const countOverlappingPairs = (pairs) => {
  let numOverlappingPairs = 0;

  for (const pair of pairs) {
    const [assignment1, assignment2] = pair.split(",");
    const [assignment1Start, assignment1End] = assignment1
      .split("-")
      .map(Number);
    const [assignment2Start, assignment2End] = assignment2
      .split("-")
      .map(Number);

    if (
      assignment1Start <= assignment2End &&
      assignment1End >= assignment2Start
    ) {
      numOverlappingPairs += 1;
    }
  }

  return numOverlappingPairs;
}

const pairs = RAW_INPUT.split(/\r?\n/);

console.log(countOverlappingPairs(pairs));
