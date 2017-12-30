$(".scrolly").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 750);
});
