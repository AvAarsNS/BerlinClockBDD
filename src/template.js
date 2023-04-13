function turnOnTheTopLight(numberOfSeconds) {
  if (numberOfSeconds % 2 === 0) {
    return "Y";
  }
  return "O";
}

module.exports = { turnOnTheTopLight };
