// We have two objects. One of them has a method called avg () that the other doesn't have
// So we will borrow the (avg()) method
var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [
    {name:"Tommy", playerID:987, age:23},
    {name:"Pau", playerID:87, age:33}
  ]
}

var appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function () {
    
    var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
      return prev + cur;
    });
    
    this.avgScore = sumOfScores / this.scores.length;
  }
}

//If we run the code below,
// the gameController.avgScore property will be set to the average score from the appController object "scores" array

// Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
gameController.avgScore = appController.avg();


// ------------------------------------------------


// Note that we are using the apply () method, so the 2nd argument has to be an array—the arguments to pass to the appController.avg () method.
appController.avg.apply(gameController, gameController.scores);

// The avgScore property was successfully set on the gameController object, even though we borrowed the avg () method from the appController object
console.log(gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log(appController.avgScore); // null