var christmasList = {mike:"Book", jason:"sweater" }
​delete christmasList.mike; // deletes the mike property​
​
​for (var people in christmasList) {
  console.log(people);
}
​// Prints only jason​
​// The mike property was deleted​
​
​delete christmasList.toString; // returns true, but toString not deleted because it is an inherited method​
​
​// Here we call the toString method and it works just fine—wasn’t deleted ​
christmasList.toString(); //"[object Object]"​
​
​// You can delete a property of an instance if the property is an own property of that instance. For example, we can delete the educationLevel property from the school's object we created above because the educationLevel property is defined on the instance: we used the "this" keyword to define the property when we declare the HigherLearning function. We did not define the educationLevel property on the HigherLearning function's prototype.​
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