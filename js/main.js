$( document ).ready(function() {
    $('body').scrollTop(0);
    $('.main-cat').addClass('animation-cat');
    $('.main-cat').removeClass('hide-animation');
});
window.onscroll = function() {
    hideArrowTop()
};
var scrollToTop = document.querySelector('.scroll-to-top');

var hideArrowTop = function () {
    if (document.body.scrollTop > 400) {
        setTimeout(function(){ 
            $('.scroll-to-top').removeClass('hidden'); 
        }, 200);  
    } 
}
window.onscroll = function() {
    hideArrowTop()
};

function scrollSmooth (location) {
    if($('body').scrollTop() <= 400) {
        $('body').animate({
            scrollTop: $(location).offset().top
        }, 800);
    }
}

scrollToTop.addEventListener("click", function( event ) {
    $('body').animate({
            scrollTop: $("body").offset().top
        }, 100);
    setTimeout(function(){ 
            $('.scroll-to-top').addClass('hidden'); 
        }, 300);
    
   
  }, false);


