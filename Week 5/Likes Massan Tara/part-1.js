console.log("hello world")

var likeCounter = 3;

var post1 = document.querySelector("#post1");

function like() {
    likeCounter ++;
    post1.innerText = likeCounter + " like(s)"
}
