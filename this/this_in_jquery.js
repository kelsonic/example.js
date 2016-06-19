// A very common piece of jQuery code

$("button").click(function (event) {
  // $(this) will have the value of the button ($("button")) object
  // because the button object invokes the click () method
  console.log($(this).prop("name"));
});