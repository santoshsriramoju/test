
function sort(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
            console.log(arr[j], arr[j + 1]);
        }
        if (noSwaps) break; //If noSwaps is true, it means that there no elements left out to do swapping and thereby we can prevent the unnecessary comparision
    }
    return arr;
}

console.log(sort([12, 32, 28, 7]));
