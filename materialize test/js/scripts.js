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
//for autocomplete (firstName)
$('input.autocomplete').keypress(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": 'images/apple.png',
            "Microsoft": 'images/micro.jpg',
            "Google": null
        },
        limit: 20,
        onAutocomplete: function (val) {

        },
        minLength: 1,
    });
});
//...................
