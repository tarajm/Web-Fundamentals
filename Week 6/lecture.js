//object is something that stores data
//represetned by {}

var chris = {
    "first_name" : "Chris",
    "email": "y@hello.com",
}

//console.log(chris["email"])
//or write as (chris.email)
//console.log(chris.email)

//chris["email"] = "new_email.com"
//console.log(chris["email"])

chris["last_name"] = "last_name"  
//to add to an object
//console.log(chris)

for(var key in chris) {
    //console.log(key)
    console.log(chris[key])
    //the name "key" can be anything you want just like in python..."i"

}

