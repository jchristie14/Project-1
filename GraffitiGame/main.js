"use strict";
(function(){
  console.log('javascript loaded');
  $(document).ready(function(){

// I used MDN's pong game to plan the collision detection and I used stackoverflow to solve a lot of problems as they came up.

// The minimum viable product is a game with a controller, that keeps score (this includes reacting to winning events), and informs the player if he or she loses or wins. In this game specifically, that means that cops have to run around and the panels have to change color when they are tagged.

  var $mario = $('#mario');
  var $apt = $('#apt');
  var $body = $('body');
  var tag = 0;
  var $score = $('#score').text('SCORE: '+tag);
  $body.keydown(function(event){
    if(event.which === 39){    //right key
      var $marioMov = $mario.css("left");
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      if ($marioMov<=1038){
        $marioMov += 10;
        $mario.css("left", $marioMov+"px")
        }
  }
  })
  $body.keydown(function(event){
    if(event.which === 37){   //left key
      var $marioMov = $mario.css("left");
      $marioMov = $marioMov.substring(0, $marioMov.length-2);
      $marioMov = Number($marioMov);
      if ($marioMov>=360){
      $marioMov -= 10;
      $mario.css("left", $marioMov+"px")
      }
    }
  });
    $body.keydown(function(event){
    if(event.which === 40){  //down
      var coord = $mario.position()
      console.log(coord.left+' '+coord.top)
      if (coord.left === 406 || coord.left === 416)
      {switch (coord.top){
        case 86:
        $mario
          .animate({"top":"174"}, 300, 'linear')
        break;

        case 174:
        $mario
         .animate({"top":"262"}, 300, 'linear')
        break;

        case 262:
        $mario
         .animate({"top":"350"}, 300, 'linear')
        break;

        case 350:
        $mario
         .animate({"top":"438"}, 300, 'linear')
        break;

        case 438:
        $mario
         .animate({"top":"536"}, 300, 'linear')
        break;

      }
    }
      else if (coord.left === 926 || coord.left===936)
      {switch (coord.top){
        case 86:
        $mario
          .animate({"top":"174"}, 300, 'linear')
        break;

        case 174:
        $mario
         .animate({"top":"262"}, 300, 'linear')
        break;

        case 262:
        $mario
         .animate({"top":"350"}, 300, 'linear')
        break;

        case 350:
        $mario
         .animate({"top":"438"}, 300, 'linear')
        break;

        case 438:
        $mario
         .animate({"top":"536"}, 300, 'linear')
        break;

      }
      }
      else console.log('stop')}
  })
  $body.keydown(function(event){
    if(event.which === 38){  //up
      var coord = $mario.position()
      console.log(coord.left+' '+coord.top)
      if (coord.left === 406 || coord.left === 416)
      {switch (coord.top){
        case 536:
        $mario
          .animate({"top":"438"}, 300, 'linear')
        break;

        case 438:
        $mario
         .animate({"top":"350"}, 300, 'linear')
        break;

        case 350:
        $mario
         .animate({"top":"262"}, 300, 'linear')
        break;

        case 262:
        $mario
         .animate({"top":"174"}, 300, 'linear')
        break;

        case 174:
        $mario
         .animate({"top":"86"}, 300, 'linear')
        break;

      }
    }
      else if (coord.left === 926 || coord.left===936)
      {switch (coord.top){
        case 536:
        $mario
          .animate({"top":"438"}, 300, 'linear')
        break;

        case 438:
        $mario
         .animate({"top":"350"}, 300, 'linear')
        break;

        case 350:
        $mario
         .animate({"top":"262"}, 300, 'linear')
        break;

        case 262:
        $mario
         .animate({"top":"174"}, 300, 'linear')
        break;

        case 174:
        $mario
         .animate({"top":"86"}, 300, 'linear')
        break;
      }
      }
      else console.log('stop')}

  })



function createCop(num){
  var cop = $('<img class="cop" id=cop'+num+' src="images/coptest2.png"/>');
  $('#apt').append(cop);
}

var copRoute =[

function animateCop(num){
var start = "86"
var row1 = "174"
var row2 = "262"
var row3 = "350"
var row4 = "438"
var ground = "536"
var stairW = "414"
var stairE = "934"
var westEdge = "350"
var eastEdge = "1048"
var offScW = "-100"
var offScE = "1500"
$('#cop'+num)
  .animate({"top":row1}, 300, 'linear') //0
  .animate({"left":eastEdge}, 700, 'linear')  //0
  .animate({"left":westEdge}, 2500, 'linear')  //0
  .animate({"left":stairW}, 300, 'linear')  //0
  .animate({"top":row2}, 300, 'linear')  //0
  .animate({"left":eastEdge}, 2500, 'linear')  //0
  .animate({"left":stairE}, 200, 'linear')  //0
  .animate({"top":row3}, 300, 'linear')  //0
  .animate({"left":eastEdge}, 200, 'linear')  //0
  .animate({"left":westEdge}, 2500, 'linear')  //0
  .animate({"left":stairE}, 2000, 'linear')  //0
  .animate({"top":row4}, 300, 'linear')  //0
  .animate({"left":stairW}, 2000, 'linear')  //0
  .animate({"top":ground}, 325, 'linear')  //0
  .animate({"left":offScE}, 3000, 'linear')  //0

},

function animateCop(num){
var start = "86"
var row1 = "174"
var row2 = "262"
var row3 = "350"
var row4 = "438"
var ground = "536"
var stairW = "414"
var stairE = "934"
var westEdge = "350"
var eastEdge = "1048"
var offScW = "-100"
var offScE = "1500"
$('#cop'+num)

  .animate({"top":row1}, 300, 'linear') //1
  .animate({"left":eastEdge}, 700, 'linear')  //1
  .animate({"left":stairE}, 200, 'linear')  //1
  .animate({"left":stairW}, 2000, 'linear')  //1
  .animate({"top":row2}, 300, 'linear')  //1
  .animate({"left":westEdge}, 300, 'linear')  //1
  .animate({"left":stairE}, 2000, 'linear')  //1
  .animate({"top":row3}, 300, 'linear')  //1
  .animate({"left":eastEdge}, 200, 'linear')  //1
  .animate({"left":westEdge}, 2500, 'linear') //1
  .animate({"left":stairE}, 2000, 'linear')  //1
  .animate({"top":row4}, 300, 'linear')  //1
  .animate({"left":westEdge}, 2000, 'linear')  //1
  .animate({"left":stairW}, 300, 'linear')  //1
  .animate({"top":ground}, 325, 'linear')  //1
  .animate({"left":offScE}, 3000, 'linear')  //1

},

function animateCop(num){
var start = "86"
var row1 = "174"
var row2 = "262"
var row3 = "350"
var row4 = "438"
var ground = "536"
var stairW = "414"
var stairE = "934"
var westEdge = "350"
var eastEdge = "1048"
var offScW = "-100"
var offScE = "1500"
$('#cop'+num)

  .animate({"top":row1}, 300, 'linear')  //2
  .animate({"left":westEdge}, 2000, 'linear')  //2
  .animate({"left":stairE}, 2000, 'linear')  //2
  .animate({"left":stairW}, 2000, 'linear')  //2
  .animate({"top":row2}, 300, 'linear')  //2
  .animate({"left":westEdge}, 300, 'linear')  //2
  .animate({"left":stairE}, 2000, 'linear')  //2
  .animate({"left":stairW}, 3000, 'linear')  //2
  .animate({"top":row3}, 300, 'linear')  //2
  .animate({"left":eastEdge}, 1500, 'linear')  //2
  .animate({"left":stairW}, 2000, 'linear')  //2
  .animate({"top":row4}, 300, 'linear')  //2
  .animate({"left":eastEdge}, 2000, 'linear')  //2
  .animate({"left":stairE}, 300, 'linear')  //2
  .animate({"top":ground}, 325, 'linear')  //2
  .animate({"left":offScE}, 3000, 'linear')  //2

},

function animateCop(num){
var start = "86"
var row1 = "174"
var row2 = "262"
var row3 = "350"
var row4 = "438"
var ground = "536"
var stairW = "414"
var stairE = "934"
var westEdge = "350"
var eastEdge = "1048"
var offScW = "-100"
var offScE = "1500"
$('#cop'+num)

  .animate({"top":row1}, 300, 'linear')  //3
  .animate({"left":westEdge}, 2200, 'linear')  //3
  .animate({"left":stairW}, 500, 'linear')  //3
  .animate({"top":row2}, 300, 'linear')  //3
  .animate({"left":eastEdge}, 2000, 'linear')  //3
  .animate({"left":westEdge}, 2500, 'linear')  //3
  .animate({"left":stairW}, 300, 'linear')  //3
  .animate({"top":row3}, 300, 'linear')  //3
  .animate({"left":eastEdge}, 2000, 'linear')  //3
  .animate({"left":westEdge}, 2500, 'linear')  //3
  .animate({"left":stairE}, 2000, 'linear')  //3
  .animate({"top":row4}, 300, 'linear')  //3
  .animate({"left":stairW}, 2000, 'linear')  //3
  .animate({"left":eastEdge}, 2000, 'linear')  //3
  .animate({"left":stairE}, 200, 'linear')  //3
  .animate({"top":ground}, 325, 'linear')  //3
  .animate({"left":offScW}, 3000, 'linear')  //3

},

function animateCop(num){
var start = "86"
var row1 = "174"
var row2 = "262"
var row3 = "350"
var row4 = "438"
var ground = "536"
var stairW = "414"
var stairE = "934"
var westEdge = "350"
var eastEdge = "1048"
var offScW = "-100"
var offScE = "1500"
$('#cop'+num)

  .animate({"top":row1}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 300, 'linear')  //4
  .animate({"left":stairW}, 2200, 'linear')  //4
  .animate({"top":row2}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 2000, 'linear')  //4
  .animate({"left":westEdge}, 2400, 'linear')  //4
  .animate({"left":eastEdge}, 2300, 'linear')  //4
  .animate({"left":stairE}, 300, 'linear')  //4
  .animate({"top":row3}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 300, 'linear')  //4
  .animate({"left":stairW}, 2000, 'linear')  //4
  .animate({"top":row4}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 2000, 'linear')  //4
  .animate({"left":westEdge}, 2400, 'linear')  //4
  .animate({"left":stairW}, 300, 'linear')  //4
  .animate({"top":ground}, 325, 'linear')  //4
  .animate({"left":offScW}, 3000, 'linear')  //4

}
]




var collDetectB=function(el){

    $('.cop').each(function(){
    var marLoc = $mario.position();
    var copLoc = $(this).position();
    if (40 >=Math.abs(marLoc.left-copLoc.left)){
      if (50>=Math.abs(marLoc.top-copLoc.top)){lose()}
      else if(50>=Math.abs(copLoc.top-marLoc.top)){lose()}
}
    else if (40>=Math.abs(copLoc.left-marLoc.left)){
       if (50>=Math.abs(marLoc.top-copLoc.top)){lose()}
      else if(50>=Math.abs(copLoc.top-marLoc.top)){lose()}

  }

})}


function cop(){
  var w = 1;


var copCreator = setInterval(function(){
    {
    var q = Math.floor(Math.random()*5);

    createCop(w);
    copRoute[q](w);
    $('.cop').each(function(){

    var copLoc = $(this).position();
    if (copLoc.left === -100){
      $(this).remove();
    }
    else if (copLoc.left === 1500){
      $(this).remove();
    }
    });
    w++;
             }
  }, 3000)
}



createCop('y');
copRoute[0]('y');
cop()


var tagPrompt = prompt("Enter the two initials you want to tag!");
var $tag = $('<p class="tag">'+tagPrompt+'</p>');
$tag.hide();
$tag.appendTo('.tagTarget');
$tag.appendTo('.tagTargetGround')


var collDet = setInterval(collDetectB, 300);


var win = function(){

  if (tag ===4){
    alert('YOU WIN!!!!');
    clearInterval(collDet);
  }
}

var lose=function(){
  alert('YOU GOT CAUGHT!!!');
  $mario.remove()
  clearInterval(collDet);
}



  $body.keydown(function(event){
    if(event.which === 32){
      var coord = $mario.position()
      if (coord.left === 486)
      {

        switch (coord.top){

        case 174:
            $('#two>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 262:
          $('#nine>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 350:
          $('#sixteen>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 438:
          $('#twenty-three>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 536:
          console.log('NOT YET');
        break;

      }
      }

      else if (coord.left === 806)
      {

        switch (coord.top){

        case 174:
            $('#five>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 262:
          $('#twelve>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 350:
          $('#nineteen>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 438:
          $('#twenty-six>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 536:
          console.log('NOT YET');
        break;
      }
      }

      else if (coord.left === 1006)
      {
        switch (coord.top){

        case 174:
            $('#seven>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 262:
          $('#fourteen>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 350:
          $('#twenty-one>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 438:
          $('#twenty-eight>.tag').fadeIn('slow', function(){
              tag += 1;
              $score.text('SCORE: '+tag)
              win();
              $(this).removeClass('tag');
            });
        break;

        case 536:
          console.log('NOT YET');
        break;
      }
      }
    }



  });

$('#reset').click(function() {
    location.reload();
});

})
})();
