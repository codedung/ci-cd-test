const { add } = require("../src/function/add");
const { sub } = require("../src/function/sub");

function calc(a, b) {
  return {
    sum: add(a, b),
    sub: sub(a, b),
  };
}

module.exports = { calc };
