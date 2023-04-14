function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

function turnOnLightsInBottomRow(numberOfMinutes) {
  if (numberOfMinutes % 5 === 0) {
    return "OOOO";
  }
  if (numberOfMinutes % 5 === 1) {
    return "YOOO";
  }
  if (numberOfMinutes % 5 === 2) {
    return "YYOO";
  }
  if (numberOfMinutes % 5 === 3) {
    return "YYYO";
  }
  else return "YYYY";
}

function berlinClock(hours, minutes, seconds) {
  const output = [];
  const numberOfSeconds = parseInt(seconds, 10);
  const numberOfMinutes = parseInt(minutes, 10);

  output.push(turnOnTheTopLight(numberOfSeconds));
  output.push("OOOO");
  output.push("OOOO");
  output.push("OOOOOOOOOOO");
  output.push(turnOnLightsInBottomRow(numberOfMinutes));

  return output;
}

module.exports = { berlinClock, turnOnTheTopLight, turnOnLightsInBottomRow };
