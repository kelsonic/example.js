function greet (gender, age, name) {
  // if a male, use Mr., else use Ms.
  var salutation = gender === "male" ? "Mr. " : "Ms. ";

  if (age > 25) {
    return "Hello, " + salutation + name + ".";
  } 
  else {
    return "Hey, " + name + ".";
  }
}

// So we are passing null because we are not using the "this" keyword in our greet function.
var greetAnAdultMale = greet.bind(null, "male", 45);

// We are changing the right-most argument with the parameter
greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // "Hey, Alex."
console.log(greetAYoungster("Emma Waterloo")); // "Hey, Emma Waterloo."