function validateInput(value){
    // input: value
// output:
// if value is undefined → "Not Assigned"
// if null → "Empty"
// if boolean → "Boolean"
// otherwise → "Valid"

    if(value === undefined){
        console.log("Not Assigned");
    }
    else if(value === null){
        console.log("Empty");
    }
    else if(typeof value === "boolean"){
        console.log("Boolean");
    }
    else{
        console.log("Valid");
    }
}

let value = "";
validateInput(value);


console.log(0 == false);
console.log(0 === false);

console.log([] == false);
console.log([] === false);

let a;
console.log(a == null);
console.log(a === null);

const users = [];

if (users) {
  console.log("Users found");
} else {
  console.log("No users");
}