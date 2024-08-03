function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.slice(4);
    const nums = numbers.split(delimiter).map(Number);
    const negatives = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        negatives.push(nums[i]);
      }
    }
    if (negatives.length > 0) {
      throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }
    return nums.reduce((sum, num) => sum + num, 0);
  }

  if (numbers === "") return 0; // emty string
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  const nums = numbers.split(/,|\n/).map(Number); // split the the using , and \n means new line and map means string to numbers
  const negatives = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negatives.push(nums[i]);
    }
  }
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }

  return nums.reduce((sum, num) => sum + num, 0); // sum the numbers
}

module.exports = { add };
