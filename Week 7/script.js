
//example of a while loop

var i = 0
while(i <5) {
    console.log("Hello")
    i++
}


//create an array
typeof(i)
var obj = [0,1,2,3]
var obj1 = ["lets", "go"]

//what data type is
console.log(typeof(i))
console.log(typeof(obj1))

//create an array

var arr = ["", 3,8,10,10]
var arr2 = [8,9,9,30]
var arr3 = []


//given an array, return the sum of the first vallue in the array, plus the array's length.  What happens if the array's first value is not a number
//, but a strung (like "what") or a boolean (T or F)

function sumItUp(arr){
    var sum = 0
    if(typeof(arr[0]) == "string"){
        console.log("not a number!!")
        return arr[0]
    }
    for(var num in arr){
        sum += arr[num]
    }
    console.log(sum + arr.length)
    return sum + arr.length
    
}

sumItUp(arr2)


