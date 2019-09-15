$(".button-collapse").sideNav({
    edge:'right'
});
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
            "اپل": 'images/apple.png',
            "مایکروسافت": 'images/micro.jpg',
            "گوگل": null
        },
        limit: 20,
        onAutocomplete: function (val) {

        },
        minLength: 1,
    });
});
//...................
$('.datepicker').click(function () {
    $(this).pickadate({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false,
        container: undefined 
    });
});
$('select').material_select();
