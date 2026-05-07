let rob = {
    firstname: "Rob",
    lastname: "Master",
    printName: function (){
        console.log(this.firstname + " "+ this.lastname);
    }
}

rob.printName()
let john = {
    firstname: "John",
    lastname: "March"
}

printName = function (city, state){
    console.log(this.firstname + " "+ this.lastname + " "+ city + " " + state);
}

rob.printName.call(john)
printName.call(john)
printName.call(rob, "new york", "NY")
// Call method replaces the this keyword inside the function with the specified oject
printName.call(rob, "new york", "NY")


// apply method
// same as call method but accepts the regular arguments as array list
printName.apply(john, ["new jersy", "NJ"])

// bind method
// copy function with the specified object - replaces this specified object

let printMyName = printName.bind(rob)
printMyName()
printMyName("new jersy", "NJ")

printMyName(["new jersy", "NJ"]) // incorrect

let printJohnName = printName.bind(john, ["new jersy", "NJ"])//John March new jersy,NJ undefined
let printJohnName1 = printName.bind(john, "new jersy", "NJ")//John March new jersy,NJ undefined


printJohnName()
printJohnName1()