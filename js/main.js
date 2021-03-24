$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });


    $('.slider-mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<button class='arrow-left'><img src='img/arrow-left.svg' class='prev' alt='1'></button>",
        nextArrow: "<button class='arrow-right'><img src='img/arrow-right.svg' class='next' alt='2'></button>",
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('[data-fancybox="images"]').fancybox({
        btnTpl: {
            arrowLeft:
                "<img data-fancybox-prev class=\"slider-mini-arrow-left fancybox-button fancybox-button--arrow_left\" title=\"{{PREV}}\" src='img/arrow-left.svg' class='prev' alt='1'>",
            arrowRight:
                "<img data-fancybox-next class=\"slider-mini-arrow-right fancybox-button fancybox-button--arrow_right\" title=\"{{NEXT}}\" src='img/arrow-right.svg' class='next' alt='2'>"
        },
        loop: true,
        autoFocus: false,
        arrows: true,
        animationEffect: 'zoom',
        infobar: false,
        smallBtn: true
    });

});



