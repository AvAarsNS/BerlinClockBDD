const {
  turnOnTheTopLight,
  turnOnLightsInSecondRow,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
  turnOnLightsInTopRow,
  createLightString,
  constants,
} = require("../src/berlinclock");

const { yellow, red, off } = constants;

describe("The top light of the Berlin Clock should only blink when the amount of seconds is even", () => {
  it("1 --> ⚫", () => {
    expect(turnOnTheTopLight(1)).toEqual("O");
  });
  it("2 --> 🟡", () => {
    expect(turnOnTheTopLight(2)).toEqual("Y");
  });
});

describe("The top row of the Berlin Clock contains four lights, increasing each 5 hours", () => {
  test.each`
    input | expected  | emoji
    ${0}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${1}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${2}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${5}  | ${"ROOO"} | ${"🔴⚫⚫⚫"}
    ${6}  | ${"ROOO"} | ${"🔴⚫⚫⚫"}
    ${10} | ${"RROO"} | ${"🔴🔴⚫⚫"}
    ${14} | ${"RROO"} | ${"🔴🔴⚫⚫"}
    ${15} | ${"RRRO"} | ${"🔴🔴🔴⚫"}
    ${17} | ${"RRRO"} | ${"🔴🔴🔴⚫"}
    ${18} | ${"RRRO"} | ${"🔴🔴🔴⚫"}
    ${20} | ${"RRRR"} | ${"🔴🔴🔴🔴"}
    ${24} | ${"RRRR"} | ${"🔴🔴🔴🔴"}
  `("$input hours --> $emoji", ({ input, expected }) => {
    expect(turnOnLightsInTopRow(input)).toEqual(expected);
  });
});

describe("The second row of the Berlin Clock contains four lights, increasing each hour. This resets every 5 hours.", () => {
  test.each`
    input | expected  | emoji
    ${0}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${1}  | ${"ROOO"} | ${"🔴⚫⚫⚫"}
    ${2}  | ${"RROO"} | ${"🔴🔴⚫⚫"}
    ${3}  | ${"RRRO"} | ${"🔴🔴🔴⚫"}
    ${4}  | ${"RRRR"} | ${"🔴🔴🔴🔴"}
    ${5}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${6}  | ${"ROOO"} | ${"🔴⚫⚫⚫"}
    ${7}  | ${"RROO"} | ${"🔴🔴⚫⚫"}
    ${8}  | ${"RRRO"} | ${"🔴🔴🔴⚫"}
    ${9}  | ${"RRRR"} | ${"🔴🔴🔴🔴"}
    ${10} | ${"OOOO"} | ${"⚫⚫⚫⚫"}
  `("$input hours --> $emoji", ({ input, expected }) => {
    expect(turnOnLightsInSecondRow(input)).toEqual(expected);
  });
});

describe("The third row of the Berlin Clock contains eleven lights, increasing each 5 minutes", () => {
  test.each`
    input | expected         | emoji
    ${0}  | ${"OOOOOOOOOOO"} | ${"⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"}
    ${1}  | ${"OOOOOOOOOOO"} | ${"⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"}
    ${5}  | ${"YOOOOOOOOOO"} | ${"🟡⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"}
    ${10} | ${"YYOOOOOOOOO"} | ${"🟡🟡⚫⚫⚫⚫⚫⚫⚫⚫⚫"}
    ${15} | ${"YYROOOOOOOO"} | ${"🟡🟡🔴⚫⚫⚫⚫⚫⚫⚫⚫"}
    ${20} | ${"YYRYOOOOOOO"} | ${"🟡🟡🔴🟡⚫⚫⚫⚫⚫⚫⚫"}
    ${25} | ${"YYRYYOOOOOO"} | ${"🟡🟡🔴🟡🟡⚫⚫⚫⚫⚫⚫"}
    ${30} | ${"YYRYYROOOOO"} | ${"🟡🟡🔴🟡🟡🔴⚫⚫⚫⚫⚫"}
    ${35} | ${"YYRYYRYOOOO"} | ${"🟡🟡🔴🟡🟡🔴🟡⚫⚫⚫⚫"}
    ${40} | ${"YYRYYRYYOOO"} | ${"🟡🟡🔴🟡🟡🔴🟡🟡⚫⚫⚫"}
    ${45} | ${"YYRYYRYYROO"} | ${"🟡🟡🔴🟡🟡🔴🟡🟡🔴⚫⚫"}
    ${50} | ${"YYRYYRYYRYO"} | ${"🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡⚫"}
    ${55} | ${"YYRYYRYYRYY"} | ${"🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡"}
  `("$input minutes --> $emoji", ({ input, expected }) => {
    expect(turnOnLightsInThirdRow(input)).toEqual(expected);
  });
});

describe("The bottom row of the Berlin Clock contains four lights, where each minute an extra light turns on. Each 5 minutes this resets.", () => {
  test.each`
    input | expected  | emoji
    ${0}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${1}  | ${"YOOO"} | ${"🟡⚫⚫⚫"}
    ${2}  | ${"YYOO"} | ${"🟡🟡⚫⚫"}
    ${3}  | ${"YYYO"} | ${"🟡🟡🟡⚫"}
    ${4}  | ${"YYYY"} | ${"🟡🟡🟡🟡"}
    ${5}  | ${"OOOO"} | ${"⚫⚫⚫⚫"}
    ${6}  | ${"YOOO"} | ${"🟡⚫⚫⚫"}
    ${7}  | ${"YYOO"} | ${"🟡🟡⚫⚫"}
    ${8}  | ${"YYYO"} | ${"🟡🟡🟡⚫"}
    ${9}  | ${"YYYY"} | ${"🟡🟡🟡🟡"}
    ${10} | ${"OOOO"} | ${"⚫⚫⚫⚫"}
  `("$input minutes --> $emoji", ({ input, expected }) => {
    expect(turnOnLightsInBottomRow(input)).toEqual(expected);
  });
});

describe("The Berlin Clock consists of multiple rows, each with its own stupid rules determining wich lights are on and what the colors are...", () => {
  it(`Primary: 🟡
  Secondary: 😡
  Interval: 3
  11
  NumberOfLights: 11 --> 🟡🟡😡🟡🟡😡🟡🟡😡🟡🟡`, () => {
    const primaryLight = yellow;
    const secondaryLight = red;
    const interval = 3;
    const numberOfLightsOn = 11;
    const numberOfLights = 11;
    const expected =
      yellow +
      yellow +
      red +
      yellow +
      yellow +
      red +
      yellow +
      yellow +
      red +
      yellow +
      yellow;
    expect(
      createLightString(
        primaryLight,
        secondaryLight,
        interval,
        numberOfLightsOn,
        numberOfLights
      )
    ).toEqual(expected);
  });
});
