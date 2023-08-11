// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let start = i + 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[start]) {
//                 let temp = arr[j];
//                 arr[j] = arr[start];
//                 arr[start] = temp;
//             }
//             console.log(arr)
//         }
//     }
//     return arr;
// }

function sort(arr) {
    //i=0 is not considered as there will be no number for comparision
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }else{
                break;
            }
        }
    }
    return arr;
}

console.log(sort([5, 3, 7, 2, 4]));