var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [
    {name:"Tommy", playerID:987, age:23},
    {name:"Pau", playerID:87, age:33}
  ]
}
​
var appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function () {
    var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
      return prev + cur;
    });
​
    this.avgScore = sumOfScores / this.scores.length;
  }
}
​
// Note that we are using the apply () method, so the 2nd argument has to be an array​
appController.avg.apply(gameController);
console.log(gameController.avgScore); // 46.4​
​
// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated​
console.log(appController.avgScore); // null​


// Is the copied avg method a copy or a pointer?


appController.maxNum = function () {
  this.avgScore = Math.max.apply(null, this.scores);
}
​
appController.maxNum.apply(gameController, gameController.scores);
console.log(gameController.avgScore); // 77​

// It's a pointer, so changing the original method affects the copy