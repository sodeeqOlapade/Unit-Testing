const lib = require("../../libs");

describe("sum", () => {
  it("returns the addition of two positive or negative integers", () => {
    const result = lib.sum(-1, 2);
    expect(result).toBe(1);
  });

  it("throws error if any of the arguments is not a number", () => {
    expect(() => {
      lib.sum({}, 3);
    }).toThrow();
  });

  it("throws error if a or b is NaN", () => {
    expect(() => {
      lib.sum(Nan, "b");
    }).toThrow();
  });
});
