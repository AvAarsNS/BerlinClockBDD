const { constants } = require("../src/berlinclock");

describe("We want to make sure the functionality is configured properly:", () => {
  describe("The colours of the lights should map to the right character internally:", () => {
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
});
