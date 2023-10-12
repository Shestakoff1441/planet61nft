const devide = (a, b) => a / b;

describe("Devide function", () => {
  it("SHould return proper result", () => {
    expect(devide(8, 4)).toBe(2);
    expect(devide(2, 2)).toBe(1);
    expect(devide(84, 4)).toBe(21);
  });
});
