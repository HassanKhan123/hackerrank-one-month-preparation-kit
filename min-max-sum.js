const minMaxSum = arr => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const sum = arr.reduce((acc, val) => (acc += val), 0);

  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum);
  console.log(maxSum);
};

minMaxSum([1, 2, 3, 4, 5]);
