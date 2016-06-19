var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {

    console.log(this.firstName + " " + this.lastName);
    ​// We could have also written this:​​
    console.log(person.firstName + " " + person.lastName);
    
  }
}