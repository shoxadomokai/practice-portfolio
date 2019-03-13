'use strict';



var sectionIndex = 1;
showSections(sectionIndex);

function plusSections(n) {
  showSections(sectionIndex += n);
   $("#intro .grid-container").addClass("animated slideInDown slow");
    $("body").css("background-color","white");
}

function currentSection(n) {
  showSections(sectionIndex = n);
}


$(document).keydown(function(e) { 
    if(sectionIndex == 1 && e.keyCode == 40) { // down
        plusSections(1);
    }
    else if(sectionIndex == 1 && e.keyCode == 38) { // up
        plusSections(-1);
    }
    else if ((sectionIndex == 2)&& e.keyCode == 40) { //down
        plusSliders(1);    
    }
    else if ((sectionIndex == 2 && sliderIndex == 1) && e.keyCode == 38) { // up
        plusSections(-1);
    }
    else if ((sectionIndex == 2 && sliderIndex != 1) && e.keyCode == 38) { // up
    plusSliders(-1);
    }
});

function showSections(n) {
    
  var i;
  var y = $("section");
    
  if (n > y.length) {
      sectionIndex = 1;
      $('section .animated').removeClass('fadeInUp');
      $('.slide-item').addClass('animated slideInRight');
  }
    
  if (n < 1) {
      sectionIndex = y.length
  }
    
  for (i = 0; i < y.length; i++) { 
    $(y[i]).hide();
  }
    
//  for (i = 0; i < dots.length; i++) {
//    $(dots[i]).removeClass('active');
//  }
    
//  $(y[sectionIndex-1]).show().one('animationend', function(){
//        $('.tagline').removeClass('animated fadeInUp delay-2s');
//    });
    
   $(y[sectionIndex-1]).show();;
//  $(dots[sectionIndex-1]).addClass('active');
}
