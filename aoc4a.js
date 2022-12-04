function countFullyContainedPairs(pairs) {
  let numFullyContainedPairs = 0;

  for (const pair of pairs) {
    // Split each assignment into start and end
    const [assignment1, assignment2] = pair.split(",");
    const [assignment1Start, assignment1End] = assignment1
      .split("-")
      .map(Number);
    const [assignment2Start, assignment2End] = assignment2
      .split("-")
      .map(Number);

    // Check if one range fully contains the other
    if (
      assignment1Start <= assignment2Start &&
      assignment1End >= assignment2End
    ) {
      numFullyContainedPairs += numFullyContainedPairs;
    } else if (
      assignment2Start <= assignment1Start &&
      assignment2End >= assignment1End
    ) {
      numFullyContainedPairs += numFullyContainedPairs;
    }
  }

  return numFullyContainedPairs;
}

const pairs = RAW_INPUT.split(/\r?\n/);

console.log(countFullyContainedPairs(pairs));
