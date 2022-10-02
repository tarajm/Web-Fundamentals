console.log("hello!")


var animalImg = document.querySelector("#fav-animal");
console.log(animalImg);


function pickCat(element) {
    //console.log(element.style)  to see all CSS properties in JS
    //element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src = "cat.jpg";
    
}


function pickDog(element) {
    element.classList.add("btn");
    animalImg.src = "dog.jpg";
}