const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const { berlinClock } = require("../src/berlinclock");

let output = [];

Given("a german citizen is standing in front of the Berlin Clock", () => {});

When(/^the current time is (\d+):(\d+):(\d+)$/, (hours, minutes, seconds) => {
  output = berlinClock(hours, minutes, seconds);
});

Then("the round yellow light at the top is off", () => {
  expect(output[0]).toEqual("O");
});

And("all lights in the top row are off", () => {
  expect(output[1]).toEqual("OOOO");
});

And("all lights in the second row are off", () => {
  expect(output[2]).toEqual("OOOO");
});

And("all lights in the third row are off", () => {
  expect(output[3]).toEqual("OOOOOOOOOOO");
});

And("all lights in the bottom row are off", () => {
  expect(output[4]).toEqual("OOOO");
});

And("only the first light in the bottom row blinks", () => {
  expect(output[4]).toEqual("YOOO");
});

Then("the round yellow light at the top blinks", () => {
  expect(output[0]).toEqual("Y");
});

Fusion("../features/berlinclock.feature");
