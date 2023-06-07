const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const { berlinClock } = require("../src/berlinclock");

let output = [];

Given("a german citizen is standing in front of the Berlin Clock", () => {});

When(/^the current time is (\d+):(\d+):(\d+)$/, (hours, minutes, seconds) => {
  output = berlinClock(hours, minutes, seconds);
});

// -- Round top light

Then("the round yellow light at the top blinks", () => {
  expect(output[0]).toEqual("Y");
});

// -- TOP row

And("the top row shows 🔴🔴⚫⚫", () => {
  expect(output[1]).toEqual("RROO");
});

// -- Second row

And("the second row shows 🔴🔴🔴⚫", () => {
  expect(output[2]).toEqual("RRRO");
});

// -- Third row

And("the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡", () => {
  expect(output[3]).toEqual("YYRYYRYYRYY");
});

// -- Bottom row

And("the bottom row shows 🟡🟡🟡🟡", () => {
  expect(output[4]).toEqual("YYYY");
});

Fusion("../features/berlinclock.feature");
