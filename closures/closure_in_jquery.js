$(function() {
​
  ​var selections = []; 
  $(".niners").click(function() { 
    // this closure has access to the selections variable​
    selections.push(this.prop("name")); 
    // update the selections variable in the outer function's scope​
  });
​
});