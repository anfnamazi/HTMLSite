new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'linear'
});
$(window).on("scroll load", function () {
    var offset = $("#about .container").offset();
    var top = offset.top;
    if (top - $(window).scrollTop() < $(window).height() - 220) {
        $("#about .container").addClass("slideInRight").removeClass("invisible");
    }
    var offset2 = $("#authors .card").offset();
    var top2 = offset2.top;
    if (top2 - $(window).scrollTop() < $(window).height() - 220) {
        $("#authors .card").addClass("zoomIn").removeClass("invisible");
    }
    var offset3 = $("#contact .col-lg-9").offset();
    var top3 = offset3.top;
    if (top3 - $(window).scrollTop() < $(window).height() - 220) {
        $("#contact .col-lg-9").addClass("fadeInRight").removeClass("invisible");
        $("#contact .col-lg-3").addClass("fadeInUp").removeClass("invisible");
    }
});