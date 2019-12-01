AOS.init({ // animations
    duration: 1000,
    once: true,
    disable: "mobile"
});

let swedish = $("#swedish").html();
let english = $("#english").html();

let language = localStorage.getItem("language");

if (language === "swedish") { // checks for users saved language if they are a previous visitor
    $("#english").empty();
} else if (language === "english") {
    $("#swedish").empty();
} else {
    $("#english").empty();
}

let scroll = new SmoothScroll('a[href*="#"]');

function windowScroll() { // checks scroll distance and adds/removes if position in document is reached
    let scrollDistance = $(window).scrollTop();
    $(".container-fluid").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}

$(window).scroll(function() { // runs function when windowed is scrolled
    windowScroll();
});

$("body").on("click", ".eng", function () { // changes language
    localStorage.setItem("language", "english");
    $("#swedish").empty();
    $("#english").html(english);
    windowScroll();
});

$("body").on("click", ".swe", function () {
    localStorage.setItem("language", "swedish");
    $("#english").empty();
    $("#swedish").html(swedish);
    windowScroll();
});