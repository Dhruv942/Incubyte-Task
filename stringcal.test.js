const { add } = require("./Stringcal");

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns the number", () => {
  expect(add("1")).toBe(1);
});
test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3);
});

test("number with new line", () => {
  expect(add("1,2\n,3")).toBe(3);
});
