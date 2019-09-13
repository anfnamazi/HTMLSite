$(".button-collapse").sideNav();
$(".slider").slider();
new WOW().init();
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$(".carousel").carousel();
$(window).on("load", function () {
    $('.tap-target').tapTarget('open');
});
