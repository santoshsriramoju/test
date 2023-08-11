function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== n && start <= end) {
        if (n < arr[middle]) {
            end = middle - 1;
        } else if (n > arr[middle]) {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === n) {
        return middle;
    }
    return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6,7,8,9,10,22,33,45,65,76,89,110,220,334,543,776], 65));
