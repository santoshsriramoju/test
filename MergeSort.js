//This method is used for sorting. It accepts sorted arrays.
function merge(arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++
        }
    }


    //If the arrays are of different sizes, then all the elements are not covered and we add the remaining elements based on verifying which array has more elements
    //Make sure if any unattended elements are left out we add them to res.
    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }

    //Make sure if any unattended elements are left out we add them to res
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++
    }
    return res;
}


//
function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); //recursion
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([8,3,5,4,7,6,1,2]));
