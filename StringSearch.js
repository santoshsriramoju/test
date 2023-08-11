// function stringSearch(str, sub) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < sub.length; j++) {
//             if (str[j] === sub[j]) {
//                 if (sub === str.slice(0,sub.length)) {
//                     count++;
//                     str = str.slice(sub.length-1)
//                 }else{
//                     str = str.slice(1);
//                 }
//             } else {
//                 str = str.slice(1);
//                 console.log("=========", str)
//             }
//         }
//     }
//     return count;
// }

// console.log(stringSearch('good morning good!', 'good'));.

function naiveSearch(long,short){
    let count = 0;
    for(let i=0;i<long.length;i++){
        for(let j=0;j<short.length;j++){
            if(long[i+j] !== short[j]) break;
            if(j === short.length-1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled","lo"));
