const findRatio = arr => {
  let positiveRatio,
    positiveCount = 0,
    negativeRatio,
    negativeCount = 0,
    zeroRatio,
    zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveCount++;
    else if (arr[i] < 0) negativeCount++;
    else zeroCount++;
  }

  positiveRatio = positiveCount / arr.length;
  negativeRatio = negativeCount / arr.length;
  zeroRatio = zeroCount / arr.length;

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
};

const res = findRatio([1, 1, 0, -1, -1]);
console.log(res);
