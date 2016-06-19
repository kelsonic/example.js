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
​
/* the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.
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



// ------------------------------------------------
// DELETING PROPERTIES



// For example, we can delete the educationLevel property from the school's object we created in find_if_property_exists.js because the educationLevel property is defined on the instance: we used the "this" keyword to define the property when we declare the HigherLearning function. We did not define the educationLevel property on the HigherLearning function's prototype.​
​
console.log(school.hasOwnProperty("educationLevel")); //true​
​// educationLevel is an own property on school, so we can delete it​
​delete school.educationLevel; //true 
​
​// The educationLevel property was deleted from the school instance​
console.log(school.educationLevel); //undefined
​
​// But the educationLevel property is still on the HigherLearning function​
​var newSchool = new HigherLearning ();
console.log(newSchool.educationLevel); // University​
​
​// If we had defined a property on the HigherLearning function's prototype, such as this educationLevel2 property:​
HigherLearning.prototype.educationLevel2 = "University 2";
​
​// Then the educationLevel2 property on the instances of HigherLearning would not be own property. ​
​
​// The educationLevel2 property is not an own property on the school instance​
console.log(school.hasOwnProperty("educationLevel2")); //false​
console.log(school.educationLevel2); // University 2​
​
​// Let's try to delete the inherited educationLevel2 property​
​delete school.educationLevel2; //true (always returns true, as noted earlier)
​
​// The inherited educationLevel2 property was not deleted​
console.log(school.educationLevel2); //University 2​