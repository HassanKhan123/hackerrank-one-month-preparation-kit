const lonelyInteger = arr => {
  let obj = {};
  arr.forEach(ar => {
    if (!obj.hasOwnProperty(ar)) {
      obj[ar] = 0;
    } else {
      obj[ar] = obj[ar] + 1;
    }
  });

  let res;
  for (let key in obj) {
    if (obj[key] === 0) res = key;
  }

  console.log(res);
};

lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
