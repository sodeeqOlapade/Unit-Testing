module.exports.sum = function(a, b) {
  if (arguments.length === 0) {
    throw new Error("Parameters cannot be empty");
  }
  if (
    Number.isNaN(a) ||
    Number.isNaN(b) ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    throw new Error("Params must be a number");
  }
  return a + b;
};

module.exports.indefiniteSum = function(...params) {
  if (params.length === 0) {
    throw new Error("Enter at least a parameter");
  }
  params.forEach(a => {
    if (Number.isNaN(a) || typeof a !== "number") {
      throw new Error("All Params must be a number");
    }
  });

  return params.reduce((acc, current) => acc + current, 0);
};

module.exports.difference = function(a, b) {
  if (
    Number.isNaN(a) ||
    Number.isNaN(b) ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    throw new Error("Params must be a number");
  }
  return a - b;
};

module.exports.indefiniteMultiplication = function(...params) {
  if (params.length === 0) {
    throw new Error("Enter at least a parameter");
  }
  params.forEach(a => {
    if (Number.isNaN(a) || typeof a !== "number") {
      throw new Error("All Params must be a number");
    }
  });
  return params.reduce((acc, current) => {
    return acc * current;
  }, 1);
};

module.exports.division = function(a, b) {
  if (arguments.length !== 2) {
    throw new Error("You are expected to enter two parameters");
  }

  if (
    Number.isNaN(a) ||
    Number.isNaN(b) ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    throw new Error("Params must be a number");
  }

  return a / b;
};
