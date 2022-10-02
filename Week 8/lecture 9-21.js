// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     for (var i = 1; i<n-1; i++){
//         fibArr.push(fibArr[i]+fibArr[i-1]);
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result);



//Change Algo  build a function that takes a dollar amount and returns the same amount in change.
//return how mnay quarters dimes nickels and pennies

function changeAlgo(cents) {
    var quarters = 0
    var dimes = 0
    var nickels = 0
    var pennies = 0
    var total = cents
    
        if(Math.floor(total/25) >= 1) {
            quarters = Math.floor(total/25)
            total -= Math.floor(total/25) * 25
        }

        if(Math.floor(total/10 >= 1) {
            dimes = Math.floor(total/10)
            total -= Math.floor(total/10) * 10
        }

        if(Math.floor(total/5) >= 1) {
            nickels = Math.floor(total/5)
            total -= Math.floor(total/5) * 5

    }
        if(Math.floor(total/1) >= 1) {
            pennies = Math.floor(total/1)
            total -= Math.floor(total/1) * 1
    }
    return quarters, dimes, nickels, pennies


changeAlgo(34)