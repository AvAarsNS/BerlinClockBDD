const {
  turnOnTheTopLight,
  turnOnLightsInSecondRow,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
} = require("../src/berlinclock");

describe("The top light of the Berlin Clock should only blink when the amount of seconds is even", () => {
  it("1 --> 🌑", () => {
    expect(turnOnTheTopLight(1)).toEqual("O");
  });
  it("2 --> 💡", () => {
    expect(turnOnTheTopLight(2)).toEqual("Y");
  });
});

describe("The second row of the Berlin Clock contains four lights, increasing each hour", () => {
  test.each([
    [0, "OOOO"],
    [1, "ROOO"],
    [2, "RROO"],
    [3, "RRRO"],
    [4, "RRRR"],
    [5, "OOOO"],
    [6, "ROOO"],
    [7, "RROO"],
    [8, "RRRO"],
    [9, "RRRR"],
    [10, "OOOO"],
    [11, "ROOO"],
  ])("%d hours -> %s", (input, expected) => {
    expect(turnOnLightsInSecondRow(input)).toEqual(expected);
  });
});

describe("The third row of the Berlin Clock contains eleven lights, increasing each 5 minutes", () => {
  test.each([
    [0, "OOOOOOOOOOO"],
    [1, "OOOOOOOOOOO"],
    [5, "YOOOOOOOOOO"],
    [10, "YYOOOOOOOOO"],
    [15, "YYROOOOOOOO"],
    [20, "YYRYOOOOOOO"],
    [25, "YYRYYOOOOOO"],
    [30, "YYRYYROOOOO"],
    [35, "YYRYYRYOOOO"],
    [40, "YYRYYRYYOOO"],
    [45, "YYRYYRYYROO"],
    [50, "YYRYYRYYRYO"],
    [55, "YYRYYRYYRYY"],
  ])("%d minutes -> %s", (input, expected) => {
    expect(turnOnLightsInThirdRow(input)).toEqual(expected);
  });
});

describe("The bottom row of the Berlin Clock contains four lights", () => {
  it("0 minute --> ⚫⚫⚫⚫", () => {
    expect(turnOnLightsInBottomRow(0)).toEqual("OOOO");
  });
  it("1 minute --> 💡⚫⚫⚫", () => {
    expect(turnOnLightsInBottomRow(1)).toEqual("YOOO");
  });
  it("2 minutes --> 💡💡⚫⚫", () => {
    expect(turnOnLightsInBottomRow(2)).toEqual("YYOO");
  });
  it("3 minutes --> 💡💡💡⚫", () => {
    expect(turnOnLightsInBottomRow(3)).toEqual("YYYO");
  });
  it("4 minutes --> 💡💡💡💡", () => {
    expect(turnOnLightsInBottomRow(4)).toEqual("YYYY");
  });
  it("7 minutes --> 💡💡⚫⚫", () => {
    expect(turnOnLightsInBottomRow(7)).toEqual("YYOO");
  });
});
