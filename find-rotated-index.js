function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      // If the left half is sorted
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= num && num < arr[mid]) {
          // If 'num' lies within the sorted left half, search in the left half
          right = mid - 1;
        } else {
          // Otherwise, search in the right half
          left = mid + 1;
        }
      } else {
        // If the right half is sorted
        if (arr[mid] < num && num <= arr[right]) {
          // If 'num' lies within the sorted right half, search in the right half
          left = mid + 1;
        } else {
          // Otherwise, search in the left half
          right = mid - 1;
        }
      }
    }
  
    // If the loop breaks, 'num' is not found in the array
    return -1;
  }