module.exports.sum = function(a, b) {
  if (a === NaN || b === NaN) {
    throw new Error("Params must be a number");
  }
  if (typeof a !== "number" || typeof b !== "number") {
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
