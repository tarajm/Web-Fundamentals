function linuxAlert() {
    alert("This game is supported on Linux")
}

var buyCounter = 0;
var increase = document.querySelector("#increase");

function buy() {
    buyCounter ++;
    increase.innerText = buyCounter
} 

var headerImg = document.querySelector("#first-pic")

function pickStonepunk() {
    headerImg.src = "stonepunk.png"
}

function pickPixelninjas() {
    headerImg.src = "pixel-ninjas-2.png"
}

