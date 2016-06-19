var ageGroup = {30: "Children", 100:"Very Old"};
console.log(ageGroup.30) // This will throw an error​
​// This is how you will access the value of the property 30, to get value "Children"​
console.log(ageGroup["30"]); // Children​
​
​//It is best to avoid using numbers as property names.