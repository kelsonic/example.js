// Create a new school object with a property name schoolName​
​var school = {schoolName:"MIT"};
​
​// Prints true because schoolName is an own property on the school object​
console.log("schoolName" in school);  // true​
​
​// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.​
console.log("schoolType" in school);  // false​
 
​// Prints true because the school object inherited the toString method from Object.prototype. ​
console.log("toString" in school);  // true


// ------------------------------------------------
// ACCESSING AND ENUMERATING PROPERTIES ON OBJECTS


// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.​
​var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};
​
​//Use of the for/in loop to access the properties in the school object​
​for (var eachItem in school) {
  console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​
​
}


// ------------------------------------------------
// ACCESSING INHERITED PROPERTIES


 //Use of the for/in loop to access the properties in the school object​
​for (var eachItem in school) {
  console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​
​
}
​
​// Create a new HigherLearning function that the school object will inherit from.​
​/* SIDE NOTE: As Wilson (an astute reader) correctly pointed out in the comments below, the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.
*/​
​
​
​function HigherLearning () {
​  this.educationLevel = "University";
}
​
​// Implement inheritance with the HigherLearning constructor​
​var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";
​
​
​//Use of the for/in loop to access the properties in the school object​
​for (var eachItem in school) {
  console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation​
}
