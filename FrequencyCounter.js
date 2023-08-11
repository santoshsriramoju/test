let arr = [1, 2, 3, 5];
let arr2 = [1, 9, 4, 25];
let res = []

// res = arr.map(n => n * n);
// arr2.sort((a, b) => a - b);
// if (JSON.stringify(arr2) === JSON.stringify(res)) {
//     console.log("True");
// } else {
//     console.log("False");
// }

const areSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}


console.log(areSame([1, 2, 3], [1, 9, 4]))
