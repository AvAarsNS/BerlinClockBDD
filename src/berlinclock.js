function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

function berlinClock(hours, minutes, seconds) {
  const output = [];
  const numberOfSeconds = parseInt(seconds, 10);

  output.push(turnOnTheTopLight(numberOfSeconds));
  output.push("OOOO");
  output.push("OOOO");
  output.push("OOOOOOOOOOO");
  output.push("OOOO");

  return output;
}

module.exports = { berlinClock, turnOnTheTopLight };
