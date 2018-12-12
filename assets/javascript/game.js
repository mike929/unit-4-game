

var random_result;
var lose;
var win;

// Setters
// Getters

// $(".crystal").attr('class', 'red');

random_result = Math.floor(Math.random() * 102) + 19;


console.log("This is the random win number: ", random_result);

$("#result").html("Winning Number: " + random_result);

for (var i = 0; i < 4; i++) {

  var random = Math.floor(Math.random() * 11) +1;
    // console.log(random);

  var crystal = $("<div>");
      crystal.attr({
        "class": 'crystal',
        "data-random": random
      });
 
   $(".crystals").append(crystal);
 
}

$(".crystal").on('click', function () {
  
  console.log($(this).attr('data-random'))

});






// create 4 boxes (images of crystals) in separate divs
// one random match floor to create random number to solve (19-120)
// I'm guess 4 more random math floors to get random crystal values (1 -12) 
// separate div boxes to hold each value (score to match for win, accumulation for random crystal presses)
// reset of game for win or loss and increament wins and loses for each game
// A win is when the crystal score equals the random number
// A loss will exceed the random chosen number
// new random number picked after each win or loss
