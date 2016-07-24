"use strict";
(function(){
  console.log('javascript loaded');
  $(document).ready(function(){


  var $mario = $('#mario');
  var $apt = $('#apt');
  var $body = $('body');
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
      // if ($marioChec = 51)
    //   var $marioMov = $mario.css("top");
    //   $marioMov = $marioMov.substring(0, $marioMov.length-2)
    //   $marioMov = Number($marioMov)

    // }
  })


  // var collDetect = function(){
  //   var copLoc = $('.cop').css("left")
  //   copLoc = copLoc.substring(0, copLoc.length-2);
  //   copLoc = Number(copLoc)
  //   console.log(copLoc)
  //   var marLoc = $mario.css("left")
  //   marLoc = marLoc.substring(0, marLoc.length-2);
  //   marLoc = Number(marLoc)
  //   var marTop = $mario.css("top");
  //   marTop = marTop.substring(0, marTop.length-2);
  //   marTop = Number(marTop);
  //   var copTop = $('.cop').css("top");
  //   copTop = copTop.substring(0, copTop.length-2);
  //   copTop = Number(copTop);
  //   if (40 >=Math.abs(marLoc-copLoc) && marTop===copTop){
  //     alert('Jail!!!!')}
  //   else if (40>=Math.abs(copLoc-marLoc)&&marTop===copTop){
  //     alert('tst')
  //   }
  // }

function createCop(num){
  var cop = $('<img class="cop" id=cop'+num+' src="images/copTest.png"/>');
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


function cop(){
  var w = 1;

  setInterval(function(){
    {
    var q = Math.floor(Math.random()*5);
    createCop(w);
    copRoute[q](w);
    w++;
             }
  }, 3000)

}

cop()


// var tagPrompt = prompt("Enter your initials!");
// var $tag = $('<p class="tag">'+tagPrompt+'</p>');
// $tag.hide();
// $tag.appendTo('.tagTarget');
// $tag.appendTo('.tagTargetGround')

// setInterval(function() {
//       console.log('toggling');
//       $('.cop').toggleClass('walkRight');
//     }, 250)


// setInterval(function() {
//       console.log('toggling');
//       $('.cop').toggleClass('walkRight');
//     }, 250)




// setInterval(collDetect, 1000);

  $body.keydown(function(event){
    if(event.which === 32){
      var coord = $mario.position()
      if (coord.left === 486)
      {
        switch (coord.top){

        case 174:
            $('#two>.tag').fadeIn('slow');
        break;

        case 262:
          $('#nine>.tag').fadeIn('slow');
        break;

        case 350:
          $('#sixteen>.tag').fadeIn('slow');
        break;

        case 438:
          $('#twenty-three>.tag').fadeIn('slow');
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
            $('#five>.tag').fadeIn('slow');
        break;

        case 262:
          $('#twelve>.tag').fadeIn('slow');
        break;

        case 350:
          $('#nineteen>.tag').fadeIn('slow');
        break;

        case 438:
          $('#twenty-six>.tag').fadeIn('slow');
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
            $('#seven>.tag').fadeIn('slow');
        break;

        case 262:
          $('#fourteen>.tag').fadeIn('slow');
        break;

        case 350:
          $('#twenty-one>.tag').fadeIn('slow');
        break;

        case 438:
          $('#twenty-eight>.tag').fadeIn('slow');
        break;

        case 536:
          console.log('NOT YET');
        break;
      }
      }
    }
  });



})
})();
