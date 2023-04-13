const {turnOnTheTopLight, turnOnLightsInBottomRow} = require("../src/berlinclock");

describe("The top light of the Berlin Clock should only blink when the amount of seconds is even", () => {
  it("1 --> 🌑", () => {
    expect(turnOnTheTopLight(1)).toEqual("O");
  });
  it("2 --> 💡", () => {
    expect(turnOnTheTopLight(2)).toEqual("Y");
  });
});

describe("The bottom row of the Berlin Clock contains four lights", () => {
  it('0 minute --> ⚫⚫⚫⚫', () => {
    expect(turnOnLightsInBottomRow(0)).toEqual("OOOO");
  });
  it('1 minute --> 💡⚫⚫⚫', () => {
    expect(turnOnLightsInBottomRow(1)).toEqual("YOOO");
  });
});
