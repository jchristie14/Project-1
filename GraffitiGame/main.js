"use strict";
(function(){
  console.log('javascript loaded');


  var $mario = $('#mario');
  var $cop = $('.cop');
  var $apt = $('#apt');
  var $body = $('body');
  var grafTest = $('.graffitiBox');
  $body.keydown(function(event){
    if(event.which === 39){
      var $marioMov = $mario.css("left");
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov += 10;
      $mario.css("left", $marioMov+"px")
    }
  })
  $body.keydown(function(event){
    if(event.which === 37){
      var $marioMov = $mario.css("left")
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov -= 10;
      $mario.css("left", $marioMov+"px")
    }
  });
    $body.keydown(function(event){
    if(event.which === 40){
      var $marioMov = $mario.css("top")
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov += 15
      $mario.css("top", $marioMov+"px")
    }
  })
  $body.keydown(function(event){
    if(event.which === 38){
      var $marioMov = $mario.css("top");
      $marioMov = $marioMov.substring(0, $marioMov.length-2)
      $marioMov = Number($marioMov)
      $marioMov -= 15
      $mario.css("top", $marioMov+"px")
    }
  })
//left = 37;up=38;right=39;down=40

  var collDetect = function(){
    var copLoc = $cop.css("left")
    copLoc = copLoc.substring(0, copLoc.length-2);
    copLoc = Number(copLoc)
    console.log(copLoc)
    var marLoc = $mario.css("left")
    marLoc = marLoc.substring(0, marLoc.length-2);
    marLoc = Number(marLoc)
    console.log(marLoc)
    var marTop = $mario.css("top");
    marTop = marTop.substring(0, marTop.length-2);
    marTop = Number(marTop);
    var copTop = $cop.css("top");
    copTop = copTop.substring(0, copTop.length-2);
    copTop = Number(copTop);
    if (40 >=Math.abs(marLoc-copLoc) && marTop===copTop){
      alert('Jail!!!!')}
    else if (40>=Math.abs(copLoc-marLoc)&&marTop===copTop){
      alert('tst')
    }
  }

setInterval(collDetect, 1000)


  $body.keydown(function(event){
    if(event.which === 32){
      grafTest.text('FUCK OFF');
    }
  });

  $('#one').text('TEST');



})();
