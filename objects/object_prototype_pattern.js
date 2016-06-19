function Fruit () {

}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function () {
  console.log("This is a " + this.fruitName);
}

Fruit.prototype.nativeTo = function () {
  console.log("Grown in:" + this.nativeToLand);
}


var mangoFruit = new Fruit ();
mangoFruit.showName(); //
mangoFruit.nativeTo();
// This is a Generic Fruit
// Grown in:USA