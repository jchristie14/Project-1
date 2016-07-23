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
      if ($marioMov<=1048){
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


function animateCop(){
$('#cop1')
  .animate({"top":"118"}, 100, 'linear')
  .animate({"left":"1048"}, 700, 'linear')
  .animate({"left":"350"}, 2500, 'linear')
  .animate({"left":"464"}, 300, 'linear')
  .animate({"top": "206"}, 100, 'linear')

}


createCop(1);
createCop(2);
createCop(3);
animateCop();









// setInterval(collDetect, 1000);

  $body.keydown(function(event){
    if(event.which === 32){
      var marPosit = $mario.position();
      console.log(marPosit.left);
      grafTest.text('FUCK OFF');
    }
  });



})
})();
