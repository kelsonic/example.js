var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  showFullName: function () {
    // The "context"
    console.log(this.firstName + " " + this.lastName);
  }
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName(); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
  firstName: "Rohit",
  lastName: "Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply(anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method
    