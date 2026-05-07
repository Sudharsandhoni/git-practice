function test() {
  console.log(this);
}

const test1 = () => {
  console.log(this);
};

// test();
// test1();


const user = {
  name: "John",
  getName: function () {
    return this.name;
  }
};

console.log(user.getName());

const user1 = {
  name: "Peter",
  getName: () => {
    return this.name;
  }
};

console.log(user1.getName()); // undefined arrow functions scope is inherited from the parent scope, 
// in this case the global scope, where there is no name property, so it returns undefined.

const fn = user.getName;
console.log(fn()); // undefined because when we call fn(), it is not called as a method of the user object,
// so this inside the getName function does not refer to the user object, but rather to the global object (or undefined in strict mode), which does not have a name property.

// what is lexical this?
// Lexical this refers to the value of this that is determined by the surrounding code where the function is defined, rather than how the function is called.
// In arrow functions, this is lexically bound, meaning it takes the value of this from the surrounding context where the arrow function is defined. 
// In contrast, regular functions have their own this value that is determined by how they are called.


const user3 = {
  name: "John",
  getName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user3.getName(); // undefined because the function passed to setTimeout is a regular function, 
// so this inside that function does not refer to the user3 object,
// but rather to the global object (or undefined in strict mode), which does not have a name property.


const user4 = {
  name: "John",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user4.getName(); // John because the function passed to setTimeout is an arrow function,
// so this inside that function is lexically bound to the surrounding context, 
// which is the getName method of the user4 object, 
// where this refers to the user4 object that has a name property with the value "John".