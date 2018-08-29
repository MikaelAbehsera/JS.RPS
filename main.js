$(document).ready(function() {

  var smallImg1 = false;
  var smallImg2 = false;
  var smallImg3 = false;
  var smallImg4 = false;
  var smallImg5 = false;
  var smallImg6 = false;
  var players = [];

$('.check1').css('opacity', 0.0);
$('.check2').css('opacity', 0.0);
//$('#choose').css('opacity', 0.0);
$('#both').css('opacity', 0.0);
$('#ready').css('opacity', 0.0);

// function that checks is both are ready

function ready() {
          if(players.length === 2) {
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
          console.log(players.length)
}


// set 1 // player 1
      $('.smallImg1').click(function clk() {
        smallImg1 = true;
        players.push('rock');
        $('.check1').css('opacity', 1.0);
        ready();
        // console.log('clicked 1--> ' + smallImg1);
      });
      $('.smallImg2').click(function clk() {
        smallImg2 = true;
        players.push('paper');
        $('.check1').css('opacity', 1.0);
        ready();
        // console.log('clicked 2--> ' + smallImg2)
      });
      $('.smallImg3').click(function clk() {
        smallImg3 = true;
        players.push('scissors');
        $('.check1').css('opacity',1.0);
        ready();
        // console.log('clicked 3--> ' + smallImg3)
        });

//set 2 // player 2
      $('.smallImg4').click(function clk() {
        smallImg4 = true;
        players.push('rock');
        $('.check2').css('opacity',1.0);
        ready();
        // console.log('clicked 4--> ' + smallImg4)
        });
      $('.smallImg5').click(function clk() {
        smallImg5 = true;
        players.push('paper');
        $('.check2').css('opacity',1.0);
        ready();
        // console.log('clicked 5--> ' + smallImg5)
        });
      $('.smallImg6').click(function clk() {
        players.push('scissors');
        players['smallImg6'] = 'scissors';
        $('.check2').css("opacity",1.0);
        ready();
        // console.log('clicked 6--> ' + smallImg6)
        });

// fight animation

      $(".buttonfx.doubletake").click(function fight() {
        if(players.length === 2) {
          $(".shock").animate({opacity: 1.0, 'z-index': 51}, 200);
          $(".shock").animate({opacity: 0.0}, 200);
          $(".shock").animate({opacity: 1.0}, 200);
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
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 0.0, 'z-index': 52}, 200);
                                      $(".fightText").animate({opacity: 1.0, 'z-index': 52}, 200);
                                    }, 2300);
          var left;
          var right;

          //loop for left side picture
          for(var i = 0; i < 4; i++) {
            if(players[0] === 'rock') {
              left = "photos/rockLeft.png";
            } else if(players[0] === 'paper') {
              left = "photos/paperLeft.png";
            } else if(players[0] === 'scissors') {
              left = "photos/scissorsLeft.png";
            }
          }

          //loop for right side picture
          for(var i = 0; i < 4; i++) {
            if(players[1] === 'rock') {
              right = "photos/rockRight.png";
            } else if(players[1] === 'paper') {
              right = "photos/paperRight.png";
            } else if(players[1] === 'scissors') {
              right = "photos/scissorsRight.png";
            }
          }

          // who won
          var winner = null;
          if(players[0] === 'rock' && players[1] === 'paper') {
            winner = 'Player 2 Wins!';
          } else if(players[0] === 'paper' && players[1] === 'rock') {
            winner = 'Player 1 Wins!';
          } else if(players[0] === 'rock' && players[1] === 'rock') {
            winner = 'Tie!';
          } else if(players[0] === 'paper' && players[1] === 'paper') {
            winner = 'Tie!';
          } else if(players[0] === 'paper' && players[1] === 'scissors') {
            winner = 'Player 2 Wins!';
          } else if(players[0] === 'scissors' && players[1] === 'paper') {
            winner = 'Player 1 Wins!';
          } else if(players[0] === 'scissors' && players[1] === 'scissors') {
            winner = 'Tie!';
          } else if(players[0] === 'scissors' && players[1] === 'rock') {
            winner = 'Player 2 Wins!';
          } else if(players[0] === 'rock' && players[1] === 'scissors') {
            winner = 'Player 1 Wins!';
          } else {
            winner = 'error 22'
          }

          //prepend to .fight

          setTimeout(function(){
                                $("<div class='winner'>" + winner + "</div>").appendTo("#fight");
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
                              }, 5500);

                                var tLeft = left;
                                var tRight = right;
                                left = "photos/rockLeft.png";
                                right = "photos/rockRight.png";

          setTimeout(function(){

                                $("<img class='leftHand' src=" + left + " style='left: -10px; top: 100px; z-index: 53; width: 300px; position:absolute;' >").appendTo("#fight");
                                $("<img class='rightHand'src=" + right + " style='right: 0px; top: 100px; z-index: 53; width: 300px; position: absolute;' >").appendTo("#fight");
// left shake
                                setTimeout(function(){
                                  $(".leftHand").animate({top: '400px'}, 200);
                                  $(".leftHand").animate({top: '100px'}, 200);
                                  $(".leftHand").animate({top: '400px'}, 200);
                                  $(".leftHand").animate({top: '100px'}, 200);
                                  $(".leftHand").animate({top: '400px'}, 200);
                                  $(".leftHand").animate({top: '100px'}, 200);
                                  $(".leftHand").animate({top: '400px'}, 200);
                                },1000)
// right shake
                                setTimeout(function(){
                                  $(".rightHand").animate({top: '400px'}, 200);
                                  $(".rightHand").animate({top: '100px'}, 200);
                                  $(".rightHand").animate({top: '400px'}, 200);
                                  $(".rightHand").animate({top: '100px'}, 200);
                                  $(".rightHand").animate({top: '400px'}, 200);
                                  $(".rightHand").animate({top: '100px'}, 200);
                                  $(".rightHand").animate({top: '400px'}, 200);
                                },999)
// hands reveal
                                setTimeout(function(){
                                                      $(".leftHand").attr("src", tLeft);
                                                      $(".rightHand").attr("src", tRight);
                                                      $(".winner").remove();
                                                    },2700)

                                setTimeout(function(){
                                                      $("<div class='winner' style='top:300px; height:200px; left: 365px; width:700px; '> Reload page to play again! </div>").appendTo("#fight");
                                                    },4000)

                              }, 2000);




        } else {
          //$('#choose').css('opacity', 0.0);
          // $('#both').css('opacity', 0.0);
          // output error message
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
