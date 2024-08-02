function add(numbers) {
  if (numbers === "") return 0; // emty string
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  const nums = numbers.split(/,|\n/).map(Number); // split the the using , and \n means new line and map means string to numbers
  return nums.reduce((sum, num) => sum + num, 0); // sum the numbers
}

module.exports = { add };
