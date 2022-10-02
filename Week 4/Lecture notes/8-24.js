function alert1() {
    alert("You clicked me!");
    var helloElement = document.querySelector("#hello");
    //console.log(helloElement);
    helloElement.style.backgroundColor = "lightgray";
}


function removeImage() {
    var helloElement = document.querySelector("#imageLocation");
    helloElement.innerHTML = "Image now gone";  //also can use innerText
}


function addLike(element) {
    console.log(element);
    var likeCount = element.innerText;
    likeCount++;
    element.innerText = likeCount;
}