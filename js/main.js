'use strict';

var slideIndex = 1;
showDivs(slideIndex);

function removeImageClass() {
    $(".image").removeClass().addClass("image-2 rotation-infinite-2");
}

function plusDivs(n) {
  showDivs(slideIndex += n);
  removeImageClass();    
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}


$(document).keydown(function(e) { 
    if(e.keyCode == 37) { // left
        plusDivs(-1);
    }
    else if(e.keyCode == 39) { // right
        plusDivs(1);
    }
});

function showDivs(n) {
    
  var i;
  var x = $(".slide-item");
  var dots = $(".circle");

  var currentSlide = x[slideIndex-1];
    
  if (n > x.length) {
      slideIndex = 1;
      $('.slide-item .animated').removeClass('fadeInUp');
      $('.slide-item').addClass('animated slideInRight');
  }
    
  if (n < 1) {
      slideIndex = x.length
  }
    
  for (i = 0; i < x.length; i++) { 
    $(x[i]).hide();
  }
    
  for (i = 0; i < dots.length; i++) {
    $(dots[i]).removeClass('active');
  }
    
  $(x[slideIndex-1]).show().one('animationend', function(){
        $('.tagline').removeClass('animated fadeInUp delay-2s');
    });
    
  $(dots[slideIndex-1]).addClass('active');
}

$('.image').hover(function(){
  $(this).css("animation-play-state", "paused");
},
function(){
  $(this).css("animation-play-state", "running")
});

$('.image-2').hover(function(){
  $(this).css("animation-play-state", "paused");
},
function(){
  $(this).css("animation-play-state", "running")
});

$('.dash-area').hover(function(){
  $("dash").css("animation-play-state", "paused");
},
function(){
  $("dash").css("animation-play-state", "running")
});

var sliderIndex = 1;
showSliders(sliderIndex);

function plusSliders(n) {
  showSliders(sliderIndex += n);  
}

function currentSlider(n) {
  showSliders(sliderIndex = n);
}

function showSliders(n) {
    
  var i;
  var z = $(".slider");
  var dots = $(".list");
    
  if (n > z.length) {
      sliderIndex = 1;
  }
    
  if (n < 1) {
      sliderIndex = z.length
  }
    
  for (i = 0; i < z.length; i++) { 
    $(z[i]).hide();
  }
    
  for (i = 0; i < dots.length; i++) {
    $(dots[i]).removeClass('active-section');
  }
    
  $(z[sliderIndex-1]).show();
    
  $(dots[sliderIndex-1]).addClass('active-section');
}
