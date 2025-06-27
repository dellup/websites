$('.kater__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        autoplay: true
      }
    }]
});

$('.header__burger').on('click', function () {
    $('.header__block').toggleClass('header__block-active');
    $('.header__menu').toggleClass('header__menu-active');
});