// This data variable is a global variable​
var data = [
  {name:"Samantha", age:12},
  {name:"Alexis", age:14}
]
​
var user = {
  // local data variable​
  data    :[
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
  ],
  showData:function (event) {
      // random number between 0 and 1​
      var randomNum = ((Math.random () * 2 | 0) + 1) - 1; 
​
      console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
}
​
// Assign the showData method of the user object to a variable​
var showDataVar = user.showData;
​
showDataVar(); 
// Samantha 12 (from the global data array, not from the local data array)​


// ----------------------------------------
// HOW TO FIX?


// Bind the showData method to the user object​
var showDataVar = user.showData.bind (user);
​
// Now the we get the value from the user object because the this keyword is bound to the user object​
showDataVar(); 
// P. Mickelson 43​