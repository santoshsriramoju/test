//Anagram, two strings are called anagram if one of the strings is formed by rearranging the letters and contains all the letters present in the other string

// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let frequencyCount = {};
//     let frequencyCount2 = {};

//     for (let char of str1) {
//         frequencyCount[char] = (frequencyCount[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
//     }

//     console.log(frequencyCount,frequencyCount2);

//     for (let key in frequencyCount) {
//         if (!(key in frequencyCount2)) {
//             return false;
//         }

//         if (frequencyCount[key] !== frequencyCount2[key]) {
//             return false;
//         }

//     }
//     return true;
// }

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (lookup[letter]) {
            lookup[letter] -= 1;
        } else {
            return false;
        }
    }
   
    return true;
}

console.log(isAnagram('azadrs', 'aazdss'))
