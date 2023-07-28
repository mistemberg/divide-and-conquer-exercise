function countZeroes(arr) {
  let zeroCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      // The array is sorted with all 1s followed by all 0s,
      // so we can break the loop when we encounter the first 1.
      break;
    }
  }

  return zeroCount;
}

module.exports = countZeroes