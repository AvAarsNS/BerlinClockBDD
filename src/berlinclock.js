function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

function turnOnLightsInThirdRow(numberOfMinutes) {
  if (numberOfMinutes === 5) {
    return "YOOOOOOOOOO";
  }
  return "OOOOOOOOOOO";
}

function turnOnLightsInBottomRow(numberOfMinutes) {
  const numberOfLightsOn = numberOfMinutes % 5;
  const numberOfLightsOff = 4 - numberOfLightsOn;

  const onLights = "Y".repeat(numberOfLightsOn);
  const offLights = "O".repeat(numberOfLightsOff);

  return onLights + offLights;
}

function berlinClock(hours, minutes, seconds) {
  const output = [];
  const numberOfSeconds = parseInt(seconds, 10);
  const numberOfMinutes = parseInt(minutes, 10);

  output.push(turnOnTheTopLight(numberOfSeconds));
  output.push("OOOO");
  output.push("OOOO");
  output.push(turnOnLightsInThirdRow(numberOfMinutes));
  output.push(turnOnLightsInBottomRow(numberOfMinutes));

  return output;
}

module.exports = {
  berlinClock,
  turnOnTheTopLight,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
};
