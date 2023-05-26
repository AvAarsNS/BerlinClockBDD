const yellow = "Y";
const red = "R";
const off = "O";

// TODO: Discuss with Michele, what to do when you create new "units" during refactor?
/* eslint-disable radix */
function createLightString(onSymbol, numberOfLightsOn, numberOfLightsOff) {
  const onLights = onSymbol.repeat(numberOfLightsOn);
  const offLights = off.repeat(numberOfLightsOff);

  return onLights + offLights;
}

function createLightStringNew(
  primaryLight,
  secondaryLight,
  interval,
  numberOfLightsOn,
  numberOfLights
) {
  let lightString = "";
  for (let index = 0; index < numberOfLightsOn; index++) {
    if ((index + 1) % interval === 0) {
      lightString += secondaryLight;
    } else {
      lightString += primaryLight;
    }
  }
  const numberOfLightsOff = numberOfLights - numberOfLightsOn;
  const offLights = off.repeat(numberOfLightsOff);
  lightString += offLights;
  return lightString;
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

  return createLightString(red, numberOfLightsOn, numberOfLightsOff);
}

function turnOnLightsInSecondRow(numberOfHours) {
  const numberOfLightsInSecondRow = 4;
  const resetThreshold = 5;

  const numberOfLightsOn = numberOfHours % resetThreshold;
  const numberOfLightsOff = numberOfLightsInSecondRow - numberOfLightsOn;

  return createLightString(red, numberOfLightsOn, numberOfLightsOff);
}

function isRedLightPosition(indexOfLight, redLightInterval) {
  return (indexOfLight + 1) % redLightInterval === 0;
}

function colourOfLightOnInThirdRow(indexOfLight) {
  const redLightInterval = 3;

  return isRedLightPosition(indexOfLight, redLightInterval) ? red : yellow;
}

function turnOnLightsInThirdRow(numberOfMinutes) {
  const minutesPerLight = 5;
  const onCount = Math.floor(numberOfMinutes / minutesPerLight);
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

  return createLightString(yellow, numberOfLightsOn, numberOfLightsOff);
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
  createLightStringNew,
  constants: {
    red,
    yellow,
    off,
  },
};
