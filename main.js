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
              $('#ready').css('opacity', 1.0);
              console.log('I ran')
          };
          console.log('I almost ran')
          console.log(players.length)
}


// set 1 // player 1
      $('.smallImg1').click(function clk() {
        smallImg1 = true;
        players.push('rock');
        $('.check1').css('opacity', 1.0);
        ready();
        console.log('clicked 1--> ' + smallImg1);
      });
      $('.smallImg2').click(function clk() {
        smallImg2 = true;
        players.push('paper');
        $('.check1').css('opacity', 1.0);
        ready();
        console.log('clicked 2--> ' + smallImg2)
      });
      $('.smallImg3').click(function clk() {
        smallImg3 = true;
        players.push('scissors');
        $('.check1').css('opacity',1.0);
        ready();
        console.log('clicked 3--> ' + smallImg3)
        });

//set 2 // player 2
      $('.smallImg4').click(function clk() {
        smallImg4 = true;
        players.push('rock');
        $('.check2').css('opacity',1.0);
        ready();
        console.log('clicked 4--> ' + smallImg4)
        });
      $('.smallImg5').click(function clk() {
        smallImg5 = true;
        players.push('paper');
        $('.check2').css('opacity',1.0);
        ready();
        console.log('clicked 5--> ' + smallImg5)
        });
      $('.smallImg6').click(function clk() {
        players.push('scissors');
        players['smallImg6'] = 'scissors';
        $('.check2').css("opacity",1.0);
        ready();
        console.log('clicked 6--> ' + smallImg6)
        });


console.log(ready())



}); //end
