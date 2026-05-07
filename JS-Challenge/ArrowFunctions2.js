const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

function Timer() {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++; // why code not broken here? because setInterval is a method of the global object
    //  (or window in browsers), so this inside the function passed to setInterval refers to the global object, 
    // not the Timer instance.
    console.log(this.seconds);
  }, 1000);
}

//const timer = new Timer(); // why new before method name? because we are creating an instance of the Timer function, 
// and in JavaScript, when we use the new keyword to create an instance of a function, 
// it creates a new object and sets this to that object inside the function.

function Timer2(){
    this.seconds = 0;
    setInterval( () => {
        this.seconds++;
        console.log(this.seconds);
    } , 1000)
}

// Timer2()

const obj = {
  value: 10,
  getValue: function () {
    return () => this.value;
  }
};

const fn = obj.getValue();
console.log(fn());


const obj1 = {
  value: 10,
  getValue: function () {
    return function () {
      return this.value;
    };
  }
};

const fn1 = obj1.getValue();
console.log(fn1());


// | Pattern                 | Result                            |
// | ----------------------- | --------------------------------- |
// | normal → arrow          | works (inherits correct this)     |
// | arrow → normal          | breaks                            |
// | normal → normal         | depends on call                   |
// | normal → normal → arrow | depends on where arrow is created |
