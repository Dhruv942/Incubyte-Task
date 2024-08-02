const { add } = require("./Stringcal");

test("empty string returns 0", () => {
  expect(add("")).toBe(0); //empty string return 0
});

test("single number returns the number", () => {
  expect(add("2")).toBe(2); // single number output
});
test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3); // comma and sum
});

test("number with new line", () => {
  expect(add("1,2\n,3")).toBe(6); // new line convert this type  1+2+3 =6;
});

test("custom delimiter returns sum of numbers", () => {
  expect(add("//;\n1;2")).toBe(3); // custom delimiter and sum
});
