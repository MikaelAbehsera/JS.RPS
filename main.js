
// Load photo's before page
function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();
    var img8 = new Image();
    var img9 = new Image();
    var img10 = new Image();
    var img11 = new Image();
    var img12 = new Image();


		img1.src = "photos/background.jpg";
		img2.src = "photos/checkBox.png";
		img3.src = "photos/checkMark.png";
    img4.src = "photos/paper.png";
    img5.src = "photos/paperLeft.png";
    img6.src = "photos/paperRight.png";
    img7.src = "photos/rock.png";
    img8.src = "photos/rockLeft.png";
    img9.src = "photos/rockRight.png";
    img10.src = "photos/scissors.png";
    img11.src = "photos/scissorsLeft.png";
    img12.src = "photos/scissorsRight.png";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
//done preloading

$(document).ready(function() {

//make cookies to keep scores and add reset button's
if(cookies('player1Score') === undefined) {
  var player1Score = 0;
} else {
  var player1Score = cookies('player1Score');
};

if(cookies('player2Score') === undefined) {
  var player2Score = 0;
} else {
  var player2Score = cookies('player2Score');

};

if(cookies("botScore") === undefined) {
  var botScore = 0;
} else {
  var botScore = cookies("botScore");

};
//make players and its contents
  //make players main div
  $(".background").prepend("<div class='players' style='width:100%; height:100%;'></div>");
  //make "players" text div and append to players main
  $( ".players" ).prepend("<div class='playerText' style='z-index: 1; text-align: center; height: 100%; width: 100%;  line-height: 3; font-size: 6vw;'>Players </div>");
  // make check 1 and prepend to players main + make check 2 and prepend to players main
  $( ".players" ).prepend("<div> <img class='check1' src='photos/checkMark.png'> <img class='check2' src='photos/checkMark.png'> </div>");
  //make div for img call it "checkBoxImg" and prepend to players main
  $( ".players" ).prepend('<div class="img1" style="height: 100%; width: 100%; "> <img class="checkBox" style="margin-left: 34%; margin-right: 59%; position:absolute;" src="photos/checkBox.png"></div>');
  $( ".players" ).prepend('<div class="img2" style="height: 100%; width: 100%; "> <img class="checkBox" style="margin-left: 59%; margin-right: 34%; position:absolute;"  src="photos/checkBox.png"></div>')
  // make mid box and its contents prepend all to players main
  $( ".players" ).prepend( "<div class='midDiv' style='height: 100%; width: 100%; position:absolute;' ></div>" );
  $( ".midDiv" ).prepend( "<div class='midBox' style=' margin-left: 30%; margin-right: 30%;' ></div>" );
      //choose text + prepend to mid box div
      $( ".midBox" ).prepend( '<div class="playerText" id="choose" style="text-align: center; font-size: 2.5vw; position: absolute; height: 100%; width: 100%; opacity:1.0;">Players choose your hands</div>');
      //both text
      $( ".midBox" ).prepend( '<div class="playerText" id="both" style="text-align: center; font-size: 2.5vw; position: absolute; height: 100%; width: 100%; opacity:0.0;">Both Players need to be Ready!</div>' );
      //ready text + prepend to mid box div
      $( ".midBox" ).prepend( '<div class="playerText" id="ready" style="text-align: center; position: absolute; font-size: 2.5vw; height: 100%; width: 100%; opacity:0.0;"> -Ready- </div>');
  // mid box end

//reset boxes
  $(".players").prepend('<div class="resetBoxes" style="height: 100%; width: 100%; position: absolute;"> </div>');
  //player 1 box
  $(".resetBoxes").prepend('<div class="player1Box" style=""> </div>');
  //player 2 box
  $(".resetBoxes").prepend('<div class="player2Box" style="" > </div>');
//reset buttons
  //player 1 reset button
  $(".player1Box").prepend('<div class="resetButton" style="left: 3%; width: auto;" >Reset Score</div>');
  //score
  $(".player1Box").prepend('<div class="score1" style="right: 1%; position:absolute; " >Score: ' + player1Score + '</div>');
  //player 2 reset button
  $(".player2Box").prepend('<div class="botButton" style="right: 3%;" >Play Vs Bot</div>');
  //score
  $(".player2Box").prepend('<div class="score2" style="z-index: 100;left: 1%; position:absolute;" >Score: ' + player2Score + '</div>');

  //player 1 + 2 reset button click
  function refreshPage(){
  window.location.reload();
  }

  $('.resetButton').click(function reset() {
    if(cookies('player1Score') === undefined) {
      var player1Score = 0;
      var player2Score = 0;
    } else {
      var num = 0;
      cookies({player1Score: num });
      var player1Score = cookies('player1Score');
      cookies({player2Score: num});
      var player2Score = cookies('player2Score');
    refreshPage();
    }
  });
// when bot button is clicked bot will choose a random hand
var bot = null;
var you = null;
$('.botButton').click(function reset() {
  function randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  //change player 2 to bot 

  //end 
  var random = randomIntFromInterval(1,3);
  if(random === 1) {
            smallImg4 = true;
            player2 = 'rock';
            $('.check2').css('opacity',1.0);
            ready();
  } else if(random === 2) {
            smallImg5 = true;
            player2 = 'paper';
            $('.check2').css('opacity',1.0);
            ready();
  } else if(random === 3) {
            smallImg6 = true;
            player2 = 'scissors';
            $('.check2').css("opacity",1.0);
            ready();
  }
  //bot was activated 
  bot = true;
  you = true;

  //change score 
  $(".score2").text("Bot Score:" + botScore);
  //end 
});



  //declare images and put false for all
  var smallImg1 = false;
  var smallImg2 = false;
  var smallImg3 = false;
  var smallImg4 = false;
  var smallImg5 = false;
  var smallImg6 = false;
  var player1;
  var player2;

//make checks + message for both and ready situations
$('.check1').css('opacity', 0.0);
$('.check2').css('opacity', 0.0);
//$('#choose').css('opacity', 0.0); keep this commented out
  //both
  $('#both').css('opacity', 0.0);
  //ready
  $('#ready').css('opacity', 0.0);

// function that checks is both players are ready
function ready() {
          if(player1 && player2) {
              $('#choose').css('opacity', 0.0);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
              $('#ready').animate({opacity: 0.0}, 700);
              $('#ready').animate({opacity: 1.0}, 700);
          };
}


// set 1 // player 1
      $('.smallImg1').click(function clk() {
        smallImg1 = true;
        player1 = 'rock';
        $('.check1').css('opacity', 1.0);
        ready();
        // console.log('clicked 1--> ' + smallImg1);
      });
      $('.smallImg2').click(function clk() {
        smallImg2 = true;
        player1 = 'paper';
        $('.check1').css('opacity', 1.0);
        ready();
        // console.log('clicked 2--> ' + smallImg2)
      });
      $('.smallImg3').click(function clk() {
        smallImg3 = true;
        player1 = 'scissors';
        $('.check1').css('opacity',1.0);
        ready();
        // console.log('clicked 3--> ' + smallImg3)
        });

//set 2 // player 2
      $('.smallImg4').click(function clk() {
        smallImg4 = true;
        player2 = 'rock';
        $('.check2').css('opacity',1.0);
        ready();
        // console.log('clicked 4--> ' + smallImg4)
        });
      $('.smallImg5').click(function clk() {
        smallImg5 = true;
        player2 = 'paper';
        $('.check2').css('opacity',1.0);
        ready();
        // console.log('clicked 5--> ' + smallImg5)
        });
      $('.smallImg6').click(function clk() {
        smallImg6 = true;
        player2 = 'scissors';
        $('.check2').css("opacity",1.0);
        ready();
        // console.log('clicked 6--> ' + smallImg6)
        });

// fight animation
      $(".buttonfx.doubletake").click(function fight() {
        if(player1 && player2) {
          $(".shock").animate({opacity: 1.0, 'z-index': 51}, 200);
          $(".shock").animate({opacity: 0.0}, 200);
          $(".shock").animate({opacity: 1.0}, 200);
          $(".shock").animate({opacity: 0.0}, 200);
          $(".shock").animate({opacity: 1.0}, 200);
          $(".shock").animate({opacity: 0.0}, 200);
          $(".shock").animate({opacity: 1.0}, 200);
          $(".battleGround").animate({opacity: 1.0, 'z-index': 50}, 10);
          $(".shock").animate({opacity: 0.0,'z-index': 0}, 200);

//player1 vs player2 message
  //add text and flash with loop
            setTimeout(function () {
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                    }, 2100);
          var left;
          var right;

//loop for left side picture
          for(var i = 0; i < 4; i++) {
            if(player1 === 'rock') {
              left = "photos/rockLeft.png";
            } else if(player1 === 'paper') {
              left = "photos/paperLeft.png";
            } else if(player1 === 'scissors') {
              left = "photos/scissorsLeft.png";
            }
          }

//loop for right side picture
          for(var i = 0; i < 4; i++) {
            if(player2 === 'rock') {
              right = "photos/rockRight.png";
            } else if(player2 === 'paper') {
              right = "photos/paperRight.png";
            } else if(player2 === 'scissors') {
              right = "photos/scissorsRight.png";
            }
          }

// who won?
          var winner = null;
          if(player1 === 'rock' && player2 === 'paper') {
            if(!bot) {
              winner = 'Player 2 Wins!';
            } else {
              winner = 'Bot Wins!';
            }
          } else if(player1 === 'paper' && player2 === 'rock') {
            if(!you) {
              winner = 'Player 1 Wins!';
            } else {
              winner = 'You Win!';
            }
          } else if(player1 === 'rock' && player2 === 'rock') {
            winner = 'Tie!';
          } else if(player1 === 'paper' && player2 === 'paper') {
            winner = 'Tie!';
          } else if(player1 === 'paper' && player2 === 'scissors') {
            if(!bot) {
              winner = 'Player 2 Wins!';
            } else {
              winner = 'Bot Wins!';
            }
          } else if(player1 === 'scissors' && player2 === 'paper') {
            if(!you) {
              winner = 'Player 1 Wins!';
            } else {
              winner = 'You Win!';
            }
          } else if(player1 === 'scissors' && player2 === 'scissors') {
            winner = 'Tie!';
          } else if(player1 === 'scissors' && player2 === 'rock') {
            if(!bot) {
              winner = 'Player 2 Wins!';
            } else {
              winner = 'Bot Wins!';
            }
          } else if(player1 === 'rock' && player2 === 'scissors') {
            if(!you) {
              winner = 'Player 1 Wins!';
            } else {
              winner = 'You Win!';
            }
          } else {
            winner = 'Error 22 [Please Contact Developer]'
          }

//winner message
          setTimeout(function(){
                                $("<div class='winner' style='height: 100%; width: 100%; text-align: center; line-height: 400px'>" + winner + "</div>").appendTo("#fight");
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                $(".winner").animate({opacity: 0.0}, 400);
                                $(".winner").animate({opacity: 1.0}, 400);
                                console.log("The winner is: " + winner)
                                if(winner === 'Player 1 Wins!' && winner === "You Win!") {
                                  player1Score++;
                                  console.log(winner);
                                } else if (winner === 'Bot Wins!') {
                                  botScore++;
                                  console.log(winner);
                                } else if (winner === 'Player 2 Wins!') {
                                  player2Score++;
                                  console.log(winner);
                                } 
//update the cookies
                                cookies({player1Score: player1Score});
                                cookies({player2Score: player2Score});
                                cookies({botScore: botScore});
                                // checking the cookies (this can be removed!)
                                  console.log(cookies('player1Score'));
                                  console.log(cookies('player2Score'));
                                  console.log(cookies("botScore"));
                                }, 5500);

                                var tLeft = left;
                                var tRight = right;
                                left = "photos/rockLeft.png";
                                right = "photos/rockRight.png";

          setTimeout(function(){

//make both hands
                                $("<img class='leftHand' src=" + left + " style='left: -10px; top: 15%; z-index: 53; width: 30%; position:absolute;' >").appendTo("#fight");
                                $("<img class='rightHand'src=" + right + " style='right: -2px; top: 15%; z-index: 53; width: 30%; position: absolute;' >").appendTo("#fight");
// left shake
                                setTimeout(function(){
                                  $(".leftHand").animate({top: '55%'}, 200);
                                  $(".leftHand").animate({top: '15%'}, 200);
                                  $(".leftHand").animate({top: '55%'}, 200);
                                  $(".leftHand").animate({top: '15%'}, 200);
                                  $(".leftHand").animate({top: '55%'}, 200);
                                  $(".leftHand").animate({top: '15%'}, 200);
                                  $(".leftHand").animate({top: '55%'}, 200);
                                },300)
// right shake
                                setTimeout(function(){
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                },299)
// hands reveal
                                setTimeout(function(){
                                                      $(".leftHand").attr("src", tLeft);
                                                      $(".rightHand").attr("src", tRight);
                                                      $(".winner").remove();
                                                      setTimeout(function(){
                                                                            refreshPage();
                                                      },4000)
                                           },2400)
                              }, 2000);
        } else {
          // output both players are not ready message
          $("#choose").animate({opacity: 0.0}, 400);
          $("#both").animate({opacity: 1.0}, 400);
          $("#both").animate({opacity: 0.0}, 400);
          $("#both").animate({opacity: 1.0}, 400);
          $("#both").animate({opacity: 0.0}, 400);
          $("#both").animate({opacity: 1.0}, 400);
          //interval and return other message
          setInterval(function(){
                                $("#both").animate({opacity: 0.0}, 0);
                                $("#choose").animate({opacity: 1.0}, 300);
                              }, 3000);
        }
      });

}); //end
