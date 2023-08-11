// function countDown(n) {
//     if (n <= 0) {  //Base
//         console.log("It's done!")
//         return;
//     }
//     console.log(n);
//     n--;
//     countDown(n);
// }

// countDown(3);

// ======================================================


// function sumRange(n){
//     if(n === 1) return 1;
//     return n + sumRange(n-1);
// }

// console.log(sumRange(4))

// ======================================================


// function getFactorial(n){
//     if(n === 1) return 1;
//     return n * getFactorial(n-1);
// }

// console.log(getFactorial(5))

// ======================================================


//Using helper function
// function collectOddValues(arr) {
//     let result = [];

//     function helper(helperInput) {
//         if (helperInput.length === 0) return;

//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1));
//     }

//     helper(arr);

//     return result;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// ======================================================

//Pure recursion
// function collectOddValues(arr) {
//     let newArr = [];
//     if (arr.length === 0) return newArr;

//     if(arr[0] % 2 !== 0 ){
//         newArr.push(arr[0]);
//     }

//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;

// }

// console.log(collectOddValues([1,2,3,4,5,6,7]));

// ======================================================

// Sample Problems
//Power
// function power(b,e){
//     if(e === 0) return 1;
//     return b * power(b, e-1);
// }

// ======================================================

//Product of array
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// function productOfArray(arr){
//     if(arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1))
// }

// ======================================================

// Get the last number in the fibonacci sequence when a number n is provided
// function fib(n){
//     if (n <= 2) return 1; // series starts with 1,1
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(4))


// ========================================================

//Fibonacci sequence
// function fib(n){
//     let res = [];
//      let n1=0,n2=1;
//      let nextTerm = 0;

//      for(let i=0;i<n;i++){
//          nextTerm = n1+n2;
//          res.push(n1);
//          n1= n2;
//          n2=nextTerm;
//      }
//      return res;
//  }

//  console.log(fib(8));

// ======================================================

// function reverse(str){
//     // add whatever parameters you deem necessary - good luck!
//     let res = "";
//     if(str.length === 0) return res;
//     res = str[str.length-1];
//     res = res.concat(reverse(str.slice(0, str.length-1)));
//     return res;
//   }

//   console.log(reverse('awesome')); //emosewa

// =====================================================================

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(s) {
//     if (s.length === 1) return true;
//     if (s[0] !== s[s.length - 1]) return false;

//     return isPalindrome(s.slice(1, s.length - 1));
// }

// ======================================================================

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr,c){
//     if(arr.length === 0) return false;
//     if(c(arr[0])) return true;
//     return someRecursive(arr.slice(1),c)
//   }

// ======================================================================

// Flatten Array
// function flatten(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//           res = res.concat(flatten(arr[i]));
//         }else{
//           res.push(arr[i]);
//         }     
//     }
//     return res;
//   }  

//   console.log(flatten([1,2,[3,4],[5,[6]]]));


//=======================================================================

//Capitalize first letter
// function capitalizeFirst (arr) {
//      let res = [];
//     if (arr.length === 0) return res;
//      res.push(arr[0].charAt(0).toUpperCase()+arr[0].slice(1));
//     res =  res.concat(capitalizeFirst(arr.slice(1)))
//     return res;
//   }

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//=======================================================================

// function nestedEvenSum(obj) {
//     // add whatever parameters you deem necessary - good luck!
//     let sum = 0;
//     if (Object.keys(obj).length === 0) return sum;
//     for (let key in obj) {
//         if (obj[key] !== null && !Array.isArray(obj[key]) && typeof obj[key] === 'object') {
//             sum += nestedEvenSum(obj[key]);
//         } else {
//             if (Number.isInteger(obj[key])) {
//                 if (obj[key] % 2 === 0) {
//                     sum += obj[key]
//                 }
//             }
//         }
//     }
//     return sum;
// }


// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }

//=========================================================================

// function capitalizeWords (arr) {
//     let res = [];
//     if(arr.length===0) return res;
//     res.push(arr[0].toUpperCase());
//     res = res.concat(capitalizeWords(arr.slice(1)));
//     return res;
//   }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

  //=========================================================================

//   const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

// function collectStrings(obj){
//     let res = [];
//     if(Object.keys(obj).length === 0 ) return res;    
//     for(let key in obj){
//         if(obj[key] !== null && !Array.isArray(obj[key]) && typeof obj[key] === 'object'){
//             res= res.concat(collectStrings(obj[key]));
//         }else{
//             if(typeof obj[key] === 'string'){
//                  res.push(obj[key]);
//             }
//         }
//     }
//    return res; 
// }

  //=========================================================================

//   {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }


// function stringifyNumbers(obj){
//     let obj1 = JSON.parse(JSON.stringify(obj));
//   if(Object.keys(obj1).length === 0) return obj1;
  
//   for(let key in obj1){
//       if(obj1[key] !==null && !Array.isArray(obj1[key]) && typeof obj1[key] === 'object'){
//          obj1[key] = stringifyNumbers(obj1[key])
//       }else{
//           if(Number.isInteger(obj1[key])){
//               obj1[key] = obj1[key].toString();
//           }
//       }
//   }
//   return obj1;
// }

// ===============================================================================