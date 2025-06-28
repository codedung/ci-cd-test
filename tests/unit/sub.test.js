const { sub } = require("../../src/function/sub");

describe("sub function", () => {
  test("sub 1 - 2 to equal -1", () => {
    expect(sub(1, 2)).toBe(-1);
  });
  test("sub 2 - 2 to equal 0", () => {
    expect(sub(2, 2)).toBe(0);
  });
});
