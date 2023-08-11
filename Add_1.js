//Get sum from 1 to n(including n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log("Time lapsed",(time2-time1)/1000);
