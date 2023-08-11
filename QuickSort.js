// function pivot(arr, start = 0, end = arr.length + 1) {
//     function swap(arr, i, j) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     var pivot = arr[start];
//     var swapIdx = start;

//     for (var i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx);
//     return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);
//         //left
//         quickSort(arr, left, pivotIndex - 1);
//         //right
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))


function sorting(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return [...sorting(left), pivot, ...sorting(right)]
}

console.log(sorting([8,20,-2,4,-6]));