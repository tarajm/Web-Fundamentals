

async function pokeapi() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    var poke_data = await response.json()
    console.log(poke_data)
    document.querySelector("#poke-name").innerHTML = data.name
}

console.log(8 % 3)
console.log( 8 % 3 == 2 );

for(var i=8; i>-2; i-=3) {
    console.log(i);
}

var x = 0;
for(var i=1; i<5; i++) {
    x += i;
}
console.log(x);

var x = "0";
for(var i=1; i<5; i++) {
     x += i;
 }
 console.log(x);