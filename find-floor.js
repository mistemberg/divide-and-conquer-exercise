// Function to find the floor of a given value 'x' in a sorted array 'arr'
function findFloor(arr, x) {
    // Initialize left pointer to the start of the array
    let left = 0;
    // Initialize right pointer to the end of the array
    let right = arr.length - 1;
    // Initialize a variable to store the potential floor (initialized to -1)
    let floor = -1;
  
    // Binary search loop, continues until the left pointer is less than or equal to the right pointer
    while (left <= right) {
      // Calculate the middle index using integer division (Math.floor)
      const mid = Math.floor((left + right) / 2);
  
      // If the middle element is equal to the target value 'x', it is the floor of 'x'
      if (arr[mid] === x) {
        return arr[mid];
      } else if (arr[mid] < x) {
        // If the middle element is smaller than 'x', it could be a potential floor.
        // So, update the 'floor' variable to store the current potential floor.
        floor = arr[mid];
        // Move the left pointer to search in the right half of the array
        left = mid + 1;
      } else {
        // If the middle element is greater than 'x', the floor must be in the left half of the array.
        // So, move the right pointer to search in the left half of the array.
        right = mid - 1;
      }
    }
  
    // The loop breaks when left > right, which means we have searched the entire array.
    // The 'floor' variable will hold the largest element in the array that is smaller than or equal to 'x'.
    // If the value of 'floor' remains -1, it means there is no element smaller than or equal to 'x', so we return -1.
    return floor;
  }

module.exports = findFloor