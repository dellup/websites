$('.main__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});
$('.services__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});
const video = document.querySelector('.video__item');
const playButton = document.querySelector('.video__button');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

document.querySelector('.video__button').addEventListener('mouseenter', () => {
    if (!video.paused) {
        playButton.style.opacity = '1';
    }
});

document.querySelector('.video__button').addEventListener('mouseleave', () => {
    if (!video.paused) {
        playButton.style.opacity = '0';
    }
});

$(function(){
      $('.raboti__images').beforeAfter({
            movable: true,
            clickMove: true,
            alwaysShow: true,
            position: 50,
            opacity: 0.4,
            activeOpacity: 1,
            hoverOpacity: 0.8,

            // slider colors
            separatorColor: '#ffffff',
            bulletColor: '#ffffff',
            arrowColor: '#333333',
      });
});

$('.raboti__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
});
$('.sertif__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
});
$('.otzivi__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
});
$('.header__burg').click((e) => {
    let button = $(e.currentTarget)
    let content = button.siblings('.header__menu')
    content.toggleClass('header__menu-active')
})