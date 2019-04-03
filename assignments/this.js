/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding is binding to the left of the dot
* 2. Explicit binding is where the "this" gets invoked
* 3. New binding is used with constructors
* 4. Window/object binding is when you use this to refer to the window usually within the global scope
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this)

// Principle 2

// code example for Implicit Binding
const me = {
  greeting:'Hello', 
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};

me.sayHello('Carl');

// Principle 3

// code example for New Binding
function NewPet (ownerName, petName, animalType){
  this.ownerName = ownerName;  
  this.congrats = `Congrats, ${this.ownerName} you are the new owner of`;
  this.petName = petName;
  this.animalType = animalType;
  this.speak = function() {
    console.log(`${this.congrats} ${this.petName} the ${this.animalType}`)
  }
}

const johnsPoodle = new NewPet('John', 'Dave', 'Poodle')
const steveTerrier = new NewPet('Steve', 'Oscar', 'Terrier')

johnsPoodle.speak();

// Principle 4

// code example for Explicit Binding
johnsPoodle.speak.call(steveTerrier)