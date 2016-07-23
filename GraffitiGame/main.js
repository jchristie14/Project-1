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
      var $marioMov = $mario.css("top")
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov += 15
      $mario.css("top", $marioMov+"px")
    }
  })
  $body.keydown(function(event){
    if(event.which === 38){  //up
      var $marioMov = $mario.css("top");
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov -= 15
      $mario.css("top", $marioMov+"px")
    }
  })


  var collDetect = function(){
    var copLoc = $('.cop').css("left")
    copLoc = copLoc.substring(0, copLoc.length-2);
    copLoc = Number(copLoc)
    console.log(copLoc)
    var marLoc = $mario.css("left")
    marLoc = marLoc.substring(0, marLoc.length-2);
    marLoc = Number(marLoc)
    var marTop = $mario.css("top");
    marTop = marTop.substring(0, marTop.length-2);
    marTop = Number(marTop);
    var copTop = $('.cop').css("top");
    copTop = copTop.substring(0, copTop.length-2);
    copTop = Number(copTop);
    if (40 >=Math.abs(marLoc-copLoc) && marTop===copTop){
      alert('Jail!!!!')}
    else if (40>=Math.abs(copLoc-marLoc)&&marTop===copTop){
      alert('tst')
    }
  }

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
  .animate({"top":row1}, 300, 'linear') //1
  .animate({"left":eastEdge}, 700, 'linear')  //1
  .animate({"left":westEdge}, 2500, 'linear')  //1
  .animate({"left":stairW}, 300, 'linear')  //1
  .animate({"top":row2}, 300, 'linear')  //1
  .animate({"left":eastEdge}, 2500, 'linear')  //1
  .animate({"left":stairE}, 200, 'linear')  //1
  .animate({"top":row3}, 300, 'linear')  //1
  .animate({"left":eastEdge}, 200, 'linear')  //1
  .animate({"left":westEdge}, 2500, 'linear')  //1
  .animate({"left":stairE}, 2000, 'linear')  //1
  .animate({"top":row4}, 300, 'linear')  //1
  .animate({"left":stairW}, 2000, 'linear')  //1
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

  .animate({"top":row1}, 300, 'linear') //2
  .animate({"left":eastEdge}, 700, 'linear')  //2
  .animate({"left":eastEdge}, 200, 'linear')  //2
  .animate({"left":stairW}, 300, 'linear')  //2
  .animate({"top":row2}, 300, 'linear')  //2
  .animate({"left":eastEdge}, 200, 'linear')  //2
  .animate({"left":stairE}, 2000, 'linear')  //2
  .animate({"top":row3}, 300, 'linear')  //2
  .animate({"left":eastEdge}, 200, 'linear')  //2
  .animate({"left":eastEdge}, 200, 'linear') //2
  .animate({"left":stairE}, 2000, 'linear')  //2
  .animate({"top":row4}, 300, 'linear')  //2
  .animate({"left":eastEdge}, 200, 'linear')  //2
  .animate({"left":stairW}, 300, 'linear')  //2
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
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":stairE}, 2000, 'linear')  //3
  .animate({"top":row2}, 300, 'linear')  //3
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":stairW}, 300, 'linear')  //3
  .animate({"top":row3}, 300, 'linear')  //3
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":stairW}, 300, 'linear')  //3
  .animate({"top":row4}, 300, 'linear')  //3
  .animate({"left":eastEdge}, 200, 'linear')  //3
  .animate({"left":stairE}, 2000, 'linear')  //3
  .animate({"top":ground}, 325, 'linear')  //3
  .animate({"left":offScE}, 3000, 'linear')  //3

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
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":stairW}, 300, 'linear')  //4
  .animate({"top":row2}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":stairW}, 300, 'linear')  //4
  .animate({"top":row3}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":stairE}, 2000, 'linear')  //4
  .animate({"top":row4}, 300, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":eastEdge}, 200, 'linear')  //4
  .animate({"left":stairE}, 2000, 'linear')  //4
  .animate({"top":ground}, 325, 'linear')  //4
  .animate({"left":offScE}, 3000, 'linear')  //4

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

  .animate({"top":row1}, 300, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":stairW}, 300, 'linear')  //5
  .animate({"top":row2}, 300, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":stairE}, 2000, 'linear')  //5
  .animate({"top":row3}, 300, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":stairW}, 300, 'linear')  //5
  .animate({"top":row4}, 300, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":eastEdge}, 200, 'linear')  //5
  .animate({"left":stairW}, 300, 'linear')  //5
  .animate({"top":ground}, 325, 'linear')  //5
  .animate({"left":offScE}, 3000, 'linear')  //5

}
]


function cop(){
  var w = 1
  setInterval(function(){
    if (w<4){
    createCop(w);
    copRoute[0](w);
    // animateCop(w);
    w++
             }
    else return
  }, 2000)

}

cop()
// createCop(1);
// createCop(2);
// createCop(3);
// animateCop();









setInterval(collDetect, 1000);

  $body.keydown(function(event){
    if(event.which === 32){
      var marPosit = $mario.position();
      console.log(marPosit.left);
      grafTest.text('FUCK OFF');
    }
  });



})
})();
