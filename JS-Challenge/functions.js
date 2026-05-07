const greet = function(name) {

    return "Hello " + name;
}

console.log(greet("John"))

function test() {
  console.log("A");
}

const result = test();
console.log(result);

console.log(4 % 2 == 0)
console.log(4 % 2 === 0)

function test() {
  return;
}

const val = test();
console.log(val);