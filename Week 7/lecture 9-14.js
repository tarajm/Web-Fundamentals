//do jo pizzeria practice problem


//var sandwich = {
  //  bread:    "sourdough",
   // protein:  "london broil",
    //cheese:   "lacey swiss cheese",
    //toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
//};
    
//console.log(sandwich);


//function sandwichFactory(bread, protein, cheese, toppings) {
  //  var sandwich = {};
    //sandwich.bread = bread;
    //sandwich.protein = protein;
    //sandwich.cheese = cheese;
    //sandwich.toppings = toppings;
    //return sandwich;
//}
    
//var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
//console.log(s1);

//create a function part 1
function pizzaOven(name, crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.name = name
    pizza.crust = crust
    pizza.sauce = sauce
    pizza.cheese = cheese
    pizza.toppings = toppings
    return pizza
}

var pizza1 = pizzaOven("regular", "deep dish", "tomato", "garlic cheese", ["green peppers", "onions"])
var pizza2 = pizzaOven("spicy", "thin crust", "tomato", "garlic cheese", ["green peppers", "tomatoes"])
var pizza3 = pizzaOven("stuckup pizza", "no crust", "jalapenos", "brie cheese", ["green peppers", "tomatoes"])

console.log(pizza1)
console.log(pizza2)
console.log(pizza3)

//created steps 2 -4 above

//bonus function
//using math.random

var crust = ["deep dish", "regular", "thin", "sourdough"]
var sauce = ["garlic", "cheese", "regular"]
var cheese = ["peperjack", "garlic", "havarti"]
var toppings = ["green pepers", "onions", "jalapenos", "spinach", "tomatoes"]

var arr = [pizza1, pizza2, pizza3]

function randomPizza(pizzaArr) {
    i = Math.floor(Math.random() * pizzaArr.length)
    return pizzaArr[i]
}

console.log(randomPizza(arr))


function randomPizza(crust, sauce, cheese, toppins){
    var pizza= {};
    pizza.crust =  crust[Math.floor(Math.random() * crust.length)]
    pizza.sauce =  sauce[Math.floor(Math.random() * sauce.length)]
    pizza.cheese =  cheese[Math.floor(Math.random() * cheese.length)]
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)]
    return pizza

}

console.log(randomPizza2(crust, sauce, cheese, toppings))