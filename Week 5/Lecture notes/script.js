// return how many even numbers
//exists within a given array and will return false if there are none  //  

function countEven(arr) {
    var count = 0
    for(var i = 0; i < arr.length; i++){

    console.log(arr[i])
        if(arr[i] % 2 == 0) {
            count += 1

        }
        console.log(count)
    } 
    return count   
}

console.log(countEven([12,8,3,8,9]))




var num1 = 2
console.log(num1 +3)

var num2 = 2

num2 = num2 + 3

console.log(num2)


function add(num3, num4) {

    sum = num3 + num4

    console.log(sum)

    return sum

}

add(2,3)
