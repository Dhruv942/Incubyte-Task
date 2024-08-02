function add(numbers) {
  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  let sum = 0;
  for (const num of numbers.split(",")) {
    sum = sum + Number(num);
  }
  return sum;
}

module.exports = { add };
