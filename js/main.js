
// carousel-animation-interval
 $('.carousel').carousel({interval: 2000});
// carousel-animation-interval

// Scroll animation 
$('.scroll').on('click',function(e) {
    e.preventDefault();
    var offset = 132;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 2000, 'swing', function() {
        // window.location.hash = target;
    });
});
// Scroll animation 




