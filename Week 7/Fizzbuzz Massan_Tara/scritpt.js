// go from  1-100

//for(i=1; i <=100; i++) {
  //  console.log(i)
//}

//focus on fizz, then buzz, then fizzbuzz

for(i=1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } 
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
    
}