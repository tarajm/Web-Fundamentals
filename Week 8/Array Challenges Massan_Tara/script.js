//Always Hungry

function alwaysHungry(arr) {
    var count = 0;
    for(i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if(count == 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//High Pass Filter


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Better than Average

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0; i <arr.length; i++) {
        sum += arr[i]
    }
    var avg = sum/arr.length
    var count = 0
    for(i=0; i<arr.length; i++){
        if(arr[i] > avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Array Reverse

function reverse(arr) {
    var left = 0;
    var right = arr.length -1;
    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;    
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var minusOne = fibArr.length -1;
        var minusTwo = fibArr.length -2;
        fibArr.push(minusOne + minusTwo);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



