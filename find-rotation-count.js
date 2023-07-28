function findRotationCount(arr) {
    let left = 0;
    let right = arr.length -1;

 while (left <= right) {
    if (arr[left] <= arr[right]) {
        return left;
    }
    const mid = Math.floor((left + right)/2);
    const next = (mid + 1) % arr.length;
    const prev = (mid + arr.length - 1) % arr.length;

    if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
    }
    if (arr[left] <= arr[mid]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
 }
 
 return - 1;

}
module.exports = findRotationCount