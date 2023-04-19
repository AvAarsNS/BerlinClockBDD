function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

// function turnOnLightsInThirdRow(numberOfMinutes) {
//   const numberOfLightsOn = Math.floor(numberOfMinutes / 5);
//   const numberOfLightsOff = 11 - numberOfLightsOn;

//   const onLights = "Y".repeat(numberOfLightsOn);
//   const offLights = "O".repeat(numberOfLightsOff);

//   return onLights + offLights;
// }

function turnOnLightsInThirdRow(numberOfMinutes) {
  let lightsThirdRow = "";
  const onCount = Math.floor(numberOfMinutes / 5);

  for (let index = 0; index < 11; index++) {
    if (index < onCount) {
      lightsThirdRow += "Y";
    } else {
      lightsThirdRow += "O";
    }
  }
  let thirdRowWithRedLightsOn = turnOnRedLightsInThirdRow(onCount, lightsThirdRow)
  return thirdRowWithRedLightsOn;
}

function turnOnRedLightsInThirdRow(onCount, lightsThirdRow) {
  let newLightsThirdRow = '';
  for (let index = 0; index < 11; index++) {
    if ((index == 2)) {
      newLightsThirdRow += 'R';
    } else {
      newLightsThirdRow += lightsThirdRow.charAt(index)
    }
  } return newLightsThirdRow
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
