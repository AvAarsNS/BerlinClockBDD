const { constants } = require("../src/berlinclock");

describe("The colours of the lights should map to the right colours:", () => {
  it("Red > R", () => {
    expect(constants.red).toEqual("R");
  });

  it("Yellow > Y", () => {
    expect(constants.yellow).toEqual("Y");
  });

  it("Off > O", () => {
    expect(constants.off).toEqual("O");
  });
});
