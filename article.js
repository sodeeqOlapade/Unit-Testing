//returns maximum of two numbers
function max(a, b) {
  return a > b ? a : b;
}

//returns maximum of two numbers
function maxImproved(a, b) {
  if (arguments.length !== 2) {
    throw new Error("only two arguments are expected");
  }
  return a > b ? a : b;
}

module.exports = { max, maxImproved };
