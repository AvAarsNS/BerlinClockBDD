const yellow = "Y";
const red = "R";
const off = "O";

/* eslint-disable radix */
function createLightString(lightSymbol, count) {
  return lightSymbol.repeat(count);
}

function turnOnTheTopLight(numberOfSeconds) {
  const secondsToggleInterval = 2;

  if (numberOfSeconds % secondsToggleInterval === 0) {
    return yellow;
  }
  return off;
}

function turnOnLightsInTopRow(numberOfHours) {
  const numberOfLightsInTopRow = 4;
  const hoursPerLight = 5;
  const numberOfLightsOn = Math.floor(numberOfHours / hoursPerLight);
  const numberOfLightsOff = numberOfLightsInTopRow - numberOfLightsOn;

  const onLights = red.repeat(numberOfLightsOn);
  const offLights = off.repeat(numberOfLightsOff);

  return onLights + offLights;
}

function turnOnLightsInSecondRow(numberOfHours) {
  const numberOfLightsInSecondRow = 4;
  const resetThreshold = 5;

  const numberOfLightsOn = numberOfHours % resetThreshold;
  const numberOfLightsOff = numberOfLightsInSecondRow - numberOfLightsOn;

  const onLights = createLightString(red, numberOfLightsOn);
  const offLights = createLightString(off, numberOfLightsOff);

  return onLights + offLights;
}


function colourOfLightOnInThirdRow(indexOfLight) {
  const redLightInterval = 3;

  const isRedLightPosition = (indexOfLight + 1) % redLightInterval === 0;
  return isRedLightPosition ? red : yellow;
}

function turnOnLightsInThirdRow(numberOfMinutes) {
  const onCount = Math.floor(numberOfMinutes / 5);
  const lightsThirdRow = Array(11).fill(off);

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

  const onLights = yellow.repeat(numberOfLightsOn);
  const offLights = off.repeat(numberOfLightsOff);

  return onLights + offLights;
}

function berlinClock(hours, minutes, seconds) {
  const output = [];
  const numberOfSeconds = parseInt(seconds);
  const numberOfMinutes = parseInt(minutes);
  const numberOfHours = parseInt(hours);

  output.push(turnOnTheTopLight(numberOfSeconds));
  output.push(turnOnLightsInTopRow(numberOfHours));
  output.push(turnOnLightsInSecondRow(numberOfHours));
  output.push(turnOnLightsInThirdRow(numberOfMinutes));
  output.push(turnOnLightsInBottomRow(numberOfMinutes));

  return output;
}

module.exports = {
  berlinClock,
  turnOnTheTopLight,
  turnOnLightsInTopRow,
  turnOnLightsInSecondRow,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
};
