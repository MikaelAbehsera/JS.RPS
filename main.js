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
          //prepend to .fight
          var i = 3;
          var time = 1000;
          setTimeout(function(){

                                  while(i > 0){
                                    setTimeout(function(){
                                    $("<div class=num>" + i + "</div>").appendTo("#fight");
                                    $(".num").animate({opacity: 1.0}, 400);
                                    $(".num").animate({opacity: 1.0}, 400);
                                    }, time)
                                    time = time + 1000;
                                    i--;
                                  }
                                }, 3000);
          setTimeout(function(){
                                $("<img src=" + left + " style='left: 0px; top: 100px; z-index: 53; width: 300px; position:absolute;' >").appendTo("#fight");
                                $("<img src=" + right + " style='left: 960px; top: 100px; z-index: 53; width: 300px; position: absolute;' >").appendTo("#fight");
                              }, 6000);



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
