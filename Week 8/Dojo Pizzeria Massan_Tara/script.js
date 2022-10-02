function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("regular", "garlic cheese sauce", "parmesean", "green peppers, onions, spinach, tomatoes")
console.log(pizza1)

var pizza2 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni, sausage")
console.log(pizza2)

var pizza3 = pizzaOven("hand tossed", "marinara", "mozzarella, feta", "mushrooms, olives, onions")
console.log(pizza3)

var pizza4 = pizzaOven("no crust - pizza bowl please", "regular sauce", "pepperjack", "green peppers")
console.log(pizza4)

var arr = [pizza1, pizza2, pizza3, pizza4]

function randomPizza(pizzaArr) {
    i = Math.floor(Math.random() * pizzaArr.length)
    return pizzaArr[i]
}
console.log(randomPizza(arr))