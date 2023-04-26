function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

function turnOnLightsInSecondRow(numberOfHours) {
  const numberOfLightsOn = numberOfHours % 5;
  const numberOfLightsOff = 4 - numberOfLightsOn;

  const onLights = "R".repeat(numberOfLightsOn);
  const offLights = "O".repeat(numberOfLightsOff);

  return onLights + offLights;
}

function colourOfLightOnInThirdRow(indexOfLight) {
  return indexOfLight % 3 === 2 ? "R" : "Y";
}

function turnOnLightsInThirdRow(numberOfMinutes) {
  const onCount = Math.floor(numberOfMinutes / 5);
  const lightsThirdRow = Array(11).fill("O");

  for (let index = 0; index < 11; index += 1) {
    if (index < onCount) {
      lightsThirdRow[index] = colourOfLightOnInThirdRow(index);
    }
  }
  return lightsThirdRow.join("");
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
  const numberOfHours = parseInt(hours, 10);

  output.push(turnOnTheTopLight(numberOfSeconds));
  output.push("OOOO");
  output.push(turnOnLightsInSecondRow(numberOfHours));
  output.push(turnOnLightsInThirdRow(numberOfMinutes));
  output.push(turnOnLightsInBottomRow(numberOfMinutes));

  return output;
}

module.exports = {
  berlinClock,
  turnOnTheTopLight,
  turnOnLightsInSecondRow,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
};
