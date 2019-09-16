$(".button-collapse").sideNav({
    edge: 'right'
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
//...................birthday
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
//........................progress
$('.skill-content').waypoint(function () {
    $(".progress .determinate").each(function () {
        // element == this


        let width = $(this).data("val");
        $(this).css("width", width + "%");
    });
}, {
    offset: '75%'
});
//....................portfolio
var portfolio = $('#portfolio-content').isotope({originLeft:false});
$('#portfolio-filter li').click(function () {
    $('#portfolio-filter li').removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolio.isotope({
        filter: $(this).data("filter")
    })
})
portfolio.on('arrangeComplete', function () {
    if ($(window).scrollTop() % 2 == 0) {
        $(window).scrollTop($(window).scrollTop() - 1);
    } else {
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});
