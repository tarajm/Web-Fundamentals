//.math random function
// from 0 - .99999
// the MATH is a module that is a place with built in functions  
//.random is the function - the . denotes the function portion
//math.floor = will round down the decimal to a whole number


Math.random() 
console.log(Math.random())
//random # from - .9999

console.log(Math.floor(Math.random()))
//whoel number


console.log(Math.random() *51)
//if I want the random # to * 50 I have to do 51 to include 50

console.log(Math.floor(Math.random() * 51))
//gives a whole number

//use math.floor on an array to populate a random pull from the list

var sports = ["football", "baseball", "soccer", "hockey" ]

console.log(Math.floor(Math.random() * sports.length))

console.log(sports[Math.floor(Math.random() * sports.length)])
