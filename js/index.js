// Smooth transition from section to section
$(".scrolly").click(function() {
    // About Me
    $('html, body').animate({
      scrollTop: $("#bio").offset().top
    }, 750);

    // // Projects
    // $('html, body').animate({
    //   scrollTop: $('#projects').offset().scrollTop
    // }, 750);
    //
    //
    // // Contact
    // $('html, body').animate({
    //   scrollTop: $('#contact').offset().scrollTop
    // }, 750);
});
