import { Example } from "../main/example";

describe("Leap year test", () => {
  it("should be divisible by 4", () => {
    let example: Example = new Example();
    expect(example.isLeapYear(1996)).toBe(true);
  });
  it("shouldn't be divisible by 100", () => {
    let example: Example = new Example();
    expect(example.isLeapYear(1996)).toBe(true);
  });
  it("if divisible by 100 should be divisible by 400 ", () => {
    let example: Example = new Example();
    expect(example.isLeapYear(2000)).toBe(true);
  });
});
