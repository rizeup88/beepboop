// Checks if the number is a valid number, and is greater than zero
var checkInput = function(number) {
  if (isNaN(number)) {
    alert("Please enter a valid number.");
  }
  else if (number < 0) {
    alert("Please enter a number greater than zero.");
  }
  else {

// Processes number entered to make sure if it's a 0, 1, or is divisble by three
  var outputArray = [];
  var zero = "Beep!";
  var one = "Boop!";
  var hal = "I'm sorry Dave," + " I'm afraid I can't do that...";
    for (var i = 0; i <= number; i++) {
      userString = i.toString();
      if (i % 3 === 0 && i > 0) {
        outputArray.push(hal);
      } else if (userString.includes(1)) {
        outputArray.push(one);
      } else if (userString.includes(0)) {
        outputArray.push(zero);
      } else {
        outputArray.push(i.toString());
        }
      }
      return outputArray;
	}
}
// User Interface Logic needed to return result on screen
$(document).ready(function(){
  $("form#entry").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("#result").append("<p>[" + checkInput(number) + "]<p>").toggle();
  });
});