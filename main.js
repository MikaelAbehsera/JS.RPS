$(document).ready(function() {

if(cookies('player1Score') === undefined) {
  var player1Score = 0;


  console.log('It was undefined so I made it 0');
} else {
  var player1Score = cookies('player1Score');

  console.log(player1Score);
};

if(cookies('player2Score') === undefined) {
  var player2Score = 0;

  console.log('It was undefined so I made it 0 again');
} else {
  var player2Score = cookies('player2Score');

  console.log(player2Score);
};
//test what is returned
console.log('before: ' + player1Score);
console.log('before: ' + player2Score);


//delete this after ---> $( "." ).prepend( "" );
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
  $(".player1Box").prepend('<div class="reset1" style="" > </div>');
  //score
  $(".player1Box").prepend('<div class="score1" style="right: 1%; position:absolute; " >Score: ' + player1Score + '</div>');
  //player 2 reset button
  $(".player2Box").prepend('<div class="reset2" style=" " > </div>');
  //score
  $(".player2Box").prepend('<div class="score2" style="left: 1%; position:absolute; " >Score: ' + player2Score + '</div>');

  //player 1 reset button click
  $('.reset1').click(function reset() {
    player1Score = 0;
  });
  //player 2 reset button
  $('.reset2').click(function reset() {
    player2Score = 0;
  });


  var smallImg1 = false;
  var smallImg2 = false;
  var smallImg3 = false;
  var smallImg4 = false;
  var smallImg5 = false;
  var smallImg6 = false;
  var player1;
  var player2;

$('.check1').css('opacity', 0.0);
$('.check2').css('opacity', 0.0);
//$('#choose').css('opacity', 0.0);
$('#both').css('opacity', 0.0);
$('#ready').css('opacity', 0.0);

// function that checks is both are ready

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

          // who won
          var winner = null;
          if(player1 === 'rock' && player2 === 'paper') {
            winner = 'Player 2 Wins!';
          } else if(player1 === 'paper' && player2 === 'rock') {
            winner = 'Player 1 Wins!';
          } else if(player1 === 'rock' && player2 === 'rock') {
            winner = 'Tie!';
          } else if(player1 === 'paper' && player2 === 'paper') {
            winner = 'Tie!';
          } else if(player1 === 'paper' && player2 === 'scissors') {
            winner = 'Player 2 Wins!';
          } else if(player1 === 'scissors' && player2 === 'paper') {
            winner = 'Player 1 Wins!';
          } else if(player1 === 'scissors' && player2 === 'scissors') {
            winner = 'Tie!';
          } else if(player1 === 'scissors' && player2 === 'rock') {
            winner = 'Player 2 Wins!';
          } else if(player1 === 'rock' && player2 === 'scissors') {
            winner = 'Player 1 Wins!';
          } else {
            winner = 'Error 22 [Please Contact Developer]'
          }

          //prepend to .fight

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
                                if(winner === 'Player 1 Wins!') {
                                  player1Score++;
                                } else if (winner === 'Player 2 Wins!') {
                                  player2Score++;
                                }
                                console.log('after: ' + player1Score);
                                console.log('after: ' + player2Score);
                                //update the cookies
                                cookies({player1Score: player1Score});
                                cookies({player2Score: player2Score});
                                console.log(cookies('player1Score'));
                                console.log(cookies('player2Score'));
                                }, 5500);

                                var tLeft = left;
                                var tRight = right;
                                left = "photos/rockLeft.png";
                                right = "photos/rockRight.png";

          setTimeout(function(){

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
                                },1000)
// right shake
                                setTimeout(function(){
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                  $(".rightHand").animate({top: '15%'}, 200);
                                  $(".rightHand").animate({top: '55%'}, 200);
                                },999)
// hands reveal
                                setTimeout(function(){
                                                      $(".leftHand").attr("src", tLeft);
                                                      $(".rightHand").attr("src", tRight);
                                                      $(".winner").remove();
                                                    },2400)

                              //   setTimeout(function(){
                              //                         $("<div class='winner' style='top:300px; height:200px; left: 365px; width:700px; '> Reload page to play again! </div>").appendTo("#fight");
                              //                       },4000)
                              //
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
