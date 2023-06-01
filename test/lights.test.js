const {
  turnOnTheTopLight,
  turnOnLightsInSecondRow,
  turnOnLightsInThirdRow,
  turnOnLightsInBottomRow,
  turnOnLightsInTopRow,
} = require("../src/berlinclock");

describe("The Berlin Clock can be used to tell the current time, in hours, minutes and seconds. The clock is read from the top row to the bottom", () => {
  describe("The current hour is denoted by the two top rows:", () => {
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

    describe("The second row of the Berlin Clock contains four lights, increasing each hour. This resets every 5 hours and then a light in the top row turns on.", () => {
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
    describe("The hour value is displayed in a 24-hour format. Combining the top two rows, we can tell the current hour", () => {
      it(`When it is 12 o'clock, the top two rows look like this:
          🔴🔴⚫⚫
          🔴🔴⚫⚫`, () => {
        expect(turnOnLightsInTopRow(12)).toEqual("RROO");
        expect(turnOnLightsInSecondRow(12)).toEqual("RROO");
      });
    });
  });
  describe("The current minute is denoted by the bottom two rows:", () => {
    describe("The third row of the Berlin Clock contains eleven yellow-and-red lights, increasing each 5 minutes. The red ones also denoting 15, 30 and 45 minutes past.", () => {
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

    describe("The bottom row of the Berlin Clock contains four lights, where each minute an extra light turns on. Each 5 minutes this resets and a light in the top row turns on.", () => {
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
    describe("Combining the bottom two rows, we can tell the current minute", () => {
      it(`When it is 12:37, the bottom two rows look like this:
          🟡🟡🔴🟡🟡🔴🟡⚫⚫⚫⚫
                  🟡🟡⚫⚫`, () => {
        expect(turnOnLightsInThirdRow(37)).toEqual("YYRYYRYOOOO");
        expect(turnOnLightsInBottomRow(37)).toEqual("YYOO");
      });
    });
  });
  describe("The current second can not be distinguished, but you can tell that a second has passed by the top light:", () => {
    describe("The top light of the Berlin Clock should only blink when the amount of seconds is even", () => {
      it("1 --> ⚫", () => {
        expect(turnOnTheTopLight(1)).toEqual("O");
      });
      it("2 --> 🟡", () => {
        expect(turnOnTheTopLight(2)).toEqual("Y");
      });
    });
  });
});

