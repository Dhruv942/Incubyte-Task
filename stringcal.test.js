const { add } = require("./Stringcal");

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns the number", () => {
  expect(add("1")).toBe(1);
});
