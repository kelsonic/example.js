var user = {
  // local data variable​
  data: [
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],

  showData:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
​
}

// Here we have a cars object that does not have a method to print its data to the console​
var cars = {
  data:[
    {name:"Honda Accord", age:14},
    {name:"Tesla Model S", age:2}
  ]
​
}
​
// We can borrow the showData () method from the user object we defined above.​
// Here we bind the user.showData method to the cars object we just created.​
cars.showData = user.showData.bind(cars);
cars.showData(); 
// Honda Accord 14​