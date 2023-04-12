function berlinClock() {
  const output = [];

  output.push("O");
  output.push("OOOO");
  output.push("OOOO");
  output.push("OOOOOOOOOOO");
  output.push("OOOO");

  return output;
}

function topLight() {
  return "O";
}

module.exports = { berlinClock, topLight };
