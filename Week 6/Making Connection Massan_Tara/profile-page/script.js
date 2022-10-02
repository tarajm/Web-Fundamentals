console.log("page loaded...");

var requestNum= document.querySelector("#requests");
var  connectionNum = document.querySelector("#connections");
var username = document.querySelector("#username")

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestNum.innerText --;
    connectionNum.innerText ++;
}


function reject(id) {
    var element = document.querySelector(id);
    element.remove();
    requestNum.innerText --;
}

function editName() {
    username.innerText = "Tara M.";
}
