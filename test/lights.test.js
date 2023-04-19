const {
  turnOnTheTopLight,
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

describe("The third row of the Berlin Clock contains eleven lights, increasing each 5 minutes", () => {
  it("0 minutes --> ⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫", () => {
    expect(turnOnLightsInThirdRow(0)).toEqual("OOOOOOOOOOO");
  });
  it("1 minute --> ⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫", () => {
    expect(turnOnLightsInThirdRow(1)).toEqual("OOOOOOOOOOO");
  });
  it("5 minutes --> 🟡⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫", () => {
    expect(turnOnLightsInThirdRow(5)).toEqual("YOOOOOOOOOO");
  });
  it("10 minutes --> 🟡🟡⚫⚫⚫⚫⚫⚫⚫⚫⚫", () => {
    expect(turnOnLightsInThirdRow(10)).toEqual("YYOOOOOOOOO");
  });
  it("15 minutes --> 🟡🟡😡⚫⚫⚫⚫⚫⚫⚫⚫", () => {
    expect(turnOnLightsInThirdRow(15)).toEqual("YYROOOOOOOO");
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
