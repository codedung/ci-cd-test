const { add } = require("../../src/function/add");

describe("add function", () => {
  test("adds 6 + 7 to equal 13", () => {
    expect(add(6, 7)).toBe(13);
  });

  test("adds -1 + 1 equal 0", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
