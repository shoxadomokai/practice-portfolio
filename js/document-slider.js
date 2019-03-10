'use strict';

var sectionIndex = 1;
showSections(sectionIndex);

function plusSections(n) {
  showSections(sectionIndex += n);
   $("#intro .grid-container").addClass("animated slideInDown fast");    
}

function currentSection(n) {
  showDivs(sectionIndex = n);
}


$(document).keydown(function(e) { 
    if(e.keyCode == 40) { // up
        plusSections(-1);
    }
    else if(e.keyCode == 38) { // down
        plusSections(1);
    }
});

function showSections(n) {
    
  var i;
  var y = $("section");
    
  if (n > y.length) {
      sectionIndex = 1
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
    
   $(y[sectionIndex-1]).show();
    
//  $(dots[sectionIndex-1]).addClass('active');
}

$('body').on('mousewheel DOMMouseScroll', function(e){
  if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
    if(e.originalEvent.detail > 0) {
      plusSections(1);    
      console.log('Down');
    } else if(e.originalEvent.detail < 0){
        plusSections(-1);
        console.log('Up');
    }
  } else if (typeof e.originalEvent.wheelDelta == 'number') {
    if(e.originalEvent.wheelDelta < 0) {
        plusSections(1);
        console.log('Down');
    } else if(e.originalEvent.wheelDelta > 0) {
        plusSections(-1);
        console.log('Up');
    }
  }
});