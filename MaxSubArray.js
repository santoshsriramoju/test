//O(n^2), not a feasible solution
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length-num+1; i++) {
//         let temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i+j];
//             if(temp>max){
//                 max = temp;
//             }
//         }
//     }
//     return max;
// }

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //To get the sum from the second consecutive pair which is [6,9,2] we need to start our loop from num as a result we will be able to get the sum from second pair onwards as first pair sum is already calculated
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
//Here the sum of first 3 digits is considered since num is 3, to get the sum for the next consecutive integers, instead of adding the numbers 6,9 and 2 we are deducting 2(i-num) and adding 2 (i)