$(window).scroll(function () {
    if ($(window).scrollTop() > 140) {
        $(".navbar").addClass("fixed-top slideInDown");
        $(".mynav").addClass("m-5 p-3");
        $("#topbtn").removeClass("invisible");
        $("#topbtn").addClass("fadeIn");
    } else {
        $(".navbar").removeClass("fixed-top slideInDown");
        $(".mynav").removeClass("m-5 p-3");
        $("#topbtn").addClass("invisible");
        $("#topbtn").removeClass("fadeIn");
    }
});
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
    $("#authors .card").each(function () {
        var offset2 = $(this).offset();
        var top2 = offset2.top;
        if (top2 - $(window).scrollTop() < $(window).height() - 220) {
            $(this).addClass("zoomIn").removeClass("invisible");
        }
    });
    var offset3 = $("#contact .col-lg-9").offset();
    var top3 = offset3.top;
    if (top3 - $(window).scrollTop() < $(window).height() - 220) {
        $("#contact .col-lg-9").addClass("fadeInRight").removeClass("invisible");
        $("#contact .col-lg-3").addClass("fadeInUp").removeClass("invisible");
    }
    var offset4 = $("#better .owl-carousel").offset();
    var top4 = offset4.top;
    if (top4 - $(window).scrollTop() < $(window).height() - 220) {
        $("#better .owl-carousel").addClass("fadeInUp").removeClass("invisible");
        $("#better .owl-carousel").addClass("fadeInUp").removeClass("invisible");
    }
});

//..........................................................................................

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
//..................................................................................
$('#reset').on('click', function () {
    $('form').removeClass('was-validated');
});
$('.dropdown-menu>.card').click(function (e) {
    e.stopPropagation();
});
let i = 2;
$("#shopbtn").click(function (e) {
    var copy = $("#mediashop").clone();
    i += 1;
    $("#shopshow").append(copy);
    document.getElementById("mybadge").innerHTML = i;
});
$(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
lightbox.option({
    'resizeDuration': 800,
    'wrapAround': true,
    'albumLabel': "نویسنده شماره %1"
});