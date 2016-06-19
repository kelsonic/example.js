// Reference Data Type vs Primitive Data Type

// The primitive data type String is stored as a value​
​var person = "Kobe";  
​var anotherPerson = person; // anotherPerson = the value of person​
person = "Bryant"; // value of person changed​
​
console.log(anotherPerson); // Kobe​
console.log(person); // Bryant

// --------------------------------------------

var person = {name: "Kobe"};
​var anotherPerson = person;
person.name = "Bryant";
​
console.log(anotherPerson.name); // Bryant​
console.log(person.name); // Bryant