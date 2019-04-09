module.exports.sum = function(a, b) {
  if (a === NaN || b === NaN) {
    throw new Error("Params must be a number");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Params must be a number");
  }
  return a + b;
};
