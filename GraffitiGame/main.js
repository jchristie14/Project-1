"use strict";
(function(){
  console.log('javascript loaded');


  var $mario = $('#mario');
  // var $cop = $('.cop');
  var $apt = $('#apt');
  var $body = $('body');
  var grafTest = $('.graffitiBox');
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



function locateCop(){
  var cop = $('#cop1');
  cop.css({"left":"824px", "top":"30px"});
}

function copDown(){
  var cop =$('#cop1');
  setTimeout(function() {
      cop.css("top", "118px");
    }, 2000);
}

function copRow1(){
  var cop =$('#cop1');
  var coinL = Math.floor(Math.random()*2);
  var coinT = Math.floor(Math.random()*2);
  if (coinL===1){console.log('left');
}
  else console.log('right; not yet')
  }

  /////cop MOVE


function movOne(){
      var cop = $('#cop1');
      var copMov = cop.css("left");
      copMov = copMov.substring(0, copMov.length-2);
      copMov = Number(copMov);
      if(copMov<824){
        for(var i=copMov;i<=824;i+=146)
          setTimeout(function(){
          cop.css("left",i+"px");
        }, 1000)
      }
      else if (copMov>824){
        for(var i=copMov;i>=824;i-=146)
          setTimeout(function(){
          cop.css("left",i+"px");
        }, 1000)
      }
      else cop.css("top", "206px")
    };

function copRight(){
      var cop = $('#cop1');
      var copMov = cop.css("left");
      copMov = copMov.substring(0, copMov.length-2)
      copMov = Number(copMov)
      if (copMov<=1048){
        copMov += 88;
        cop.css("left", copMov+"px")
        }
      else copLeft
  }

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


createCop(1);
createCop(2);
createCop(3);
locateCop();
copDown();
setTimeout(movOne, 4000)





// setInterval(collDetect, 1000);

  $body.keydown(function(event){
    if(event.which === 32){
      grafTest.text('FUCK OFF');
    }
  });

  // $('#one').text('TEST');



})();
