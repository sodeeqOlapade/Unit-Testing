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
      lib.sum(NaN, "b");
    }).toThrow();
  });
});

describe("indefiniteSum", () => {
  it("throws an error if no argument is provided", () => {
    expect(() => {
      lib.indefiniteSum();
    }).toThrow();
  });

  it("it should add any amount of number given to it", () => {
    const result = lib.indefiniteSum(1, 2, 3, 1, 1, 1, 1);
    expect(result).toBe(10);
  });

  it("it should throw an error if any of the argument is not a number", () => {
    expect(() => {
      lib.indefiniteSum(1, 2, 3, NaN, 5);
    }).toThrow();
  });
});
