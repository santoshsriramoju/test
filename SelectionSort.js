// function sort(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         let min = i;
//         for (let j = i; j < arr.length-1; j++) { 
//             if (arr[j] < arr[j + 1] && arr[j] <= arr[min]) {
//                 min = j;
//             }
//             console.log("=====================",arr)

//         }
//         if((i === arr.length-2) && (arr[i]>arr[i+1])){
//             [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             return arr;
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//         console.log("---------------",arr)
//     }
//     return arr;
// }

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest){ //Prevent comparing the same values 
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(sort([5, 3, 1, 2, 4]));