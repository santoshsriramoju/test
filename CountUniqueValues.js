//Using frequency count
// function countUniqueValues(arr) {
//     let lookup = {};
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (!lookup[arr[i]]) {
//             lookup[arr[i]] = 1;
//             count++;
//         }
//     }
//     return count;
// }

// function countUniqueValues(arr) {
//     let resArr = [arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//        if(!resArr.includes(arr[i])){
//         resArr.push(arr[i]);
//        }
//     }
//     return resArr.length;
// }

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1, 3, 2, 6]));