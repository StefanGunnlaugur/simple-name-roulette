$(function() {

  var box;
  var takki;
  var rando;
  function generateName() {
    if(nofn.length > 1){
      box.setAttribute("class", "vinningshafi show");
      var teljari = 0;
      var hradi = 100;
      var duration = 12000;
      var output = $('.vinningshafi');
      var started = new Date().getTime();

    /*  animationTimer = setInterval(function() {
        if (new Date().getTime() - started > duration) {
          clearInterval(animationTimer); // Stop the loop
          nofn.splice(rando, 1);
        box.setAttribute("class", "vinningshafi show animate");
        } else {
          rando = getRandomInt(0, nofn.length);
          output.text(
            '' +
            nofn[rando]
          );
        }
      }, 100);
*/
    setTimeout(function callback() {
      if (new Date().getTime() - started > duration) {
        nofn.splice(rando, 1);
        box.setAttribute("class", "vinningshafi show animate");
        var audio = new Audio('./audio/sound.mp3');
        audio.play();
      } else {
        if(teljari > 45){
          hradi = hradi + (hradi/20) + (hradi/50);
        }
        rando = getRandomInt(0, nofn.length);
        output.text(
          '' +
          nofn[rando]
        );
        teljari++;
        setTimeout(callback, hradi);
      }

});


  }
  }

  init();
  function init() {
    takki = document.querySelector('.button');
    box = document.querySelector('.vinningshafi');
    takki.addEventListener('click', generateName);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  document.addEventListener('DOMContentLoaded', function () {
    text.init();
  });

  });
