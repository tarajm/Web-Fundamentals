console.log("hello world")
var myNum = 7
console.log(myNum)

onsole.log("hello world")

console.log(typeof 3)
console.log(typeof "hello world")

// single line comment

/*

This 
multi
line comment
*/

// data types:

var myString = 'Hello world again';


console.log(myString)
console.log("testing")

var myNum = 7
console.log(myNum)

var myArray = [6, 4, 3]
//indexes     0 , 1 ,2

// ==

// ===  compares the correct data types

// short hand notations
i++
num = num + 1;

num -= 2;

// control
if (3 === "3") {
    console.log("success")

} else {
    console.log("something went wrong")
}

// for loops
for (var i = 0; i < 10; i++) {
    console.log(i)
}


function kids(){
    var childHeight = 50;
    if(childHeight > 52){
        console.log("Tall enough to get on the ride")
    } else{
        console.log("Sorry not tall enough")
    }
}
// kids();
var x = kids();

console.log(x)

function calc( num1, num2){
    let result = num1 + num2;

    return result; // returns the variable result on whats passed
}
console.log(calc(3,4))

//const varname = 3.4

