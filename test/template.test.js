const {turnOnTheTopLight} = require("../src/template");

describe("The top light of the Berlin Clock should only blink when the amount of seconds is even", () => {
  it("1 --> 🌑", () => {
    expect(turnOnTheTopLight(1)).toEqual("O");
  });
  it("2 --> 💡", () => {
    expect(turnOnTheTopLight(2)).toEqual("Y");
  });
});
