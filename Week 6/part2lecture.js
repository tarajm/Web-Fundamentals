

//create a function that takes in an object and a value and checks to see if the value is one of the values within the object.  Then return T or F.

var fun_things = {
    "football_teams": "chargers",
    "book": "Harry Potter",
    "anime": "Attack on titan",
    "character": "Luffy"
}

function searchVal(obj, val) {
    for(var key in obj) {
        if(obj[key] == val) {
            return True
        }
    }
return False
}

searchVal(fun_things, "Harry Potter")
