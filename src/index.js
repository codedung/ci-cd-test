const { add } = require("../src/function/add");

function calc(a, b) {
  return {
    sum: add(a, b),
  };
}

module.exports = { calc };
