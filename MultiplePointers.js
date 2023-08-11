// function sumZero(arr){ //TimeComplexity: O(n^2) space COmplexity O(1)
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === 0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); 
//We are comparing the extreme left value -3 and extreme right value 3, if the summation is zero we return the pair [3,3] else if sum is greater than 0 it means right value is more and therefore we reduce it's value by considering the value next to it, similarly if the sum is negative, we will consider the next value from the left.