
function binarySearch(arr, target) {
    const n = arr.length;
    let lo = 0;
    let hi = n - 1;

    while (lo <= hi) {
        let mid = Math.floor(lo + ((hi - lo) / 2));

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'], 'cherry'));

module.exports = binarySearch;