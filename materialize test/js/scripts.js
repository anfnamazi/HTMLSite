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
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        container: undefined // ex. 'body' will append picker to body
    });
});