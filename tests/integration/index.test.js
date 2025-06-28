const { calc } = require("../../src/index");

describe("통합테스트", () => {
  test("add 결과 반환1", () => {
    const result = calc(1, 2);
    expect(result).toEqual({
      sum: 3,
    });
  });
  test("add 결과 반환2", () => {
    const result = calc(3, -2);
    expect(result).toEqual({ sum: 1 });
  });
});
