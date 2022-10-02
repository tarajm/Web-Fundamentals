//PRINT ODDS 1-20

// function printOdds() {
//     for(i=1; i<=20; i+2){
//         console.log(i)
//     }
// }

for(i=1; i<=20; i+=2){
    console.log(i)
}

//Decreasing Multiples of 3
//100 to 0

for(i=100; i>-1; i--){
    if(i%3 == 0){
        console.log(i)
    }    
}

//Print the sequence

for(i=4; i>-4; i-=1.5){
    console.log(i)
}

//Sigma

var sum = 0
for(i=1; i< 101; i++){
    sum += i;
    }
console.log(sum)

//Factorial

var product = 1;
for(i=1; i<13; i++){
    product *= i;
}
console.log(product)