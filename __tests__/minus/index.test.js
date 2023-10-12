const minus = (a, b) => a - b;

describe("minus functions", () => {
  it("should return result after minus function", () => {
    // check if all components are rendered
    expect(minus(5, 3)).toBe(2);
    expect(minus(5, 5)).toBe(0);
    expect(minus(-5, 1)).toBe(-6);
  });
});
