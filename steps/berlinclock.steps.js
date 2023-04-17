const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const { berlinClock } = require("../src/berlinclock");

let output = [];

Given("a german citizen is standing in front of the Berlin Clock", () => {});

When(/^the current time is (\d+):(\d+):(\d+)$/, (hours, minutes, seconds) => {
  output = berlinClock(hours, minutes, seconds);
});

// -- Round top light

Then("the round yellow light at the top is off", () => {
  expect(output[0]).toEqual("O");
});

Then("the round yellow light at the top is on", () => {
  expect(output[0]).toEqual("Y");
});

// -- First row
And("all lights in the top row are off", () => {
  expect(output[1]).toEqual("OOOO");
});

// -- Second row
And("all lights in the second row are off", () => {
  expect(output[2]).toEqual("OOOO");
});

// -- Third row
And("all lights in the third row are off", () => {
  expect(output[3]).toEqual("OOOOOOOOOOO");
});

And("only the first light in the third row is yellow", () => {
  expect(output[3]).toEqual("YOOOOOOOOOO");
});

And("the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴⚫⚫", () => {
  expect(output[3]).toEqual("YYRYYRYYROO");
});

// -- Bottom row
And("all lights in the bottom row are off", () => {
  expect(output[4]).toEqual("OOOO");
});

And("only the first light in the bottom row is yellow", () => {
  expect(output[4]).toEqual("YOOO");
});

And("the first two lights in the bottom row are yellow", () => {
  expect(output[4]).toEqual("YYOO");
});

And("the first three lights in the bottom row are yellow", () => {
  expect(output[4]).toEqual("YYYO");
});

And("all the lights in the bottom row are yellow", () => {
  expect(output[4]).toEqual("YYYY");
});

Fusion("../features/berlinclock.feature");
