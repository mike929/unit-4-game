var random_result;
var lose = 0;
var win = 0;
var previous = 0;



// reset wrapped into a function for resuse
var resetGame = function () {

  $(".crystals").empty();

  var images = [
    'assets/images/Icon_Crystal_Red.png',
    'assets/images/Quartz_crystal_icon.png',
    'assets/images/Rainbow_crystal_icon.png',
    'assets/images/Shadowshard_crystal_icon.png'
  ];

  // create the random number players need to match
  random_result = Math.floor(Math.random() * 102) + 19;
  
    $("#result").html(random_result);

  // $("#result").html("Winning Number: " + random_result);

  for (var i = 0; i < 4; i++) {
    // create the 1 -12 numbers each crystal can have ( above this line means run 4 times, since we have 4 crystals)
    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });
    crystal.css({
      "background-image":"url('" + (images[i]) + "')",
      "background-size":"cover"
      
    });

    // crystal.append(random); // just to see the random number for each crystal TEMPORARY, while I work on the code

    $(".crystals").append(crystal);

  }

  // $("#previous").html("Total Score: " + previous);

  $("#previous").html(previous);

}


resetGame();

// Event delegation - we listen to the DOM after the click event we pass the element
$(document).on('click', ".crystal", function () {


  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html(previous);

  console.log(previous);

  if (previous > random_result) {
    lose++;

    $("#lose").html("You Lose!: " + lose);

    previous = 0;

    resetGame();

  } else if (previous === random_result) {
    win++;

    $("#win").html("You win!!: " + win);

    previous = 0;

    resetGame();

  }

});






// create 4 boxes (images of crystals) in separate divs
// one random match floor to create random number to solve (19-120)
// I'm guess 4 more random math floors to get random crystal values (1 -12) 
// separate div boxes to hold each value (score to match for win, accumulation for random crystal presses)
// reset of game for win or loss and increament wins and loses for each game
// A win is when the crystal score equals the random number
// A loss will exceed the random chosen number
// new random number picked after each win or loss
