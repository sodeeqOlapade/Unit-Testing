const lib = require("../../libs");

describe("sum", () => {
  it("throws an error if no argument is provided", () => {
    expect(() => {
      lib.sum();
    }).toThrow();
  });

  it("returns the addition of two positive or negative integers", () => {
    const result = lib.sum(-1, 2);
    expect(result).toBe(1);
  });

  it("throws error if any of the arguments is not a number including NaN", () => {
    expect(() => {
      lib.sum("", 3);
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

describe("difference", () => {
  it("returns the difference between two given integers", () => {
    const result = lib.difference(3, 7);
    expect(result).toBe(-4);
  });

  it("throws error if any of the arguments is not a number including NaN and empty parameter list", () => {
    expect(() => {
      lib.difference(NaN, 3);
    }).toThrow();
  });
});

describe("indefiniteMultiplication", () => {
  it("throws error if no arguments is provided", () => {
    expect(() => {lib.indefiniteMultiplication()}).toThrow();
  });
  it("return multiplication of all arguments", () => {
    const result = lib.indefiniteMultiplication(1, 2, 3, -1, 4);
    expect(result).toBe(-24);
  });
  it("it should throw an error if any of the argument is not a number including NaN", () => {
    expect(() => {
      lib.indefiniteMultiplication(1,{}, 2, 3, NaN, 5);
    }).toThrow();
  });
});

describe("division", () => {
    it("throws an error if no argument is provided", () => {
      expect(() => {
        lib.division(1,2,3);
      }).toThrow();
    });
  
    it("returns the division of two positive or negative integers", () => {
      const result = lib.division(-1, 2);
      expect(result).toBe(-0.5);
    });
  
    it("throws error if any of the arguments is not a number including NaN", () => {
      expect(() => {
        lib.division(3, NaN);
      }).toThrow();
    });
  });
