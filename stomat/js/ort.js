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
$('.services__header-button').click((e) => {
    let hui = $(e.currentTarget)
    let huiData = hui.data('tabs')
    
    $('.services__header-button').removeClass('services__header-button-active')
    hui.addClass('services__header-button-active')

    $('.services__main-item').removeClass('services__main-item-active')
    $('#services__main-'+huiData).addClass('services__main-item-active')
})
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    draggable: false,
    responsive: [{
 
        breakpoint: 900,
        settings: {
          swipe: false,
          slidesToShow: 1,
          infinite: true,
          arrows: true,
          draggable: false,
          slidesToScroll: 1,
        }
   
      }]
});
$('.otzivi__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
        }}, {
        breakpoint: 650,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$('.header__burg').click((e) => {
    let button = $(e.currentTarget)
    let content = button.siblings('.header__menu')
    content.toggleClass('header__menu-active')
})
$(document).ready(function() { 
    $('.header__menu-item').on('click', function() { 
        
        if (!$(this).hasClass('header__menu-item-submenu')) {
            $('.header__menu-active').removeClass('header__menu-active'); 
        }
    }); 
        $('.header__submenu-item').on('click', function(event) {
        event.stopPropagation();
        $('.header__menu-active').removeClass('header__menu-active'); 
    });
});
$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($('.header__menu-active').length) {
            $('.header__menu-active').removeClass('header__menu-active');
        }
    });
});
$('.modal__open').click(() => {
    $('.modal__bg').css({'display': 'flex'})
    setTimeout(() => {
        $('.modal__bg').addClass('modal__bg-active')
        $('.modal__window').css({'display': 'block'})
        setTimeout(() => {
            $('.modal__window').addClass('modal__window-active')
        }, 150)
    }, 150)
})

$('.modal__close').click(() => {
    $('.modal__window').removeClass('modal__window-active')
    setTimeout(() => {
        $('.modal__window').css({'display': ''})
        $('.modal__bg').removeClass('modal__bg-active')
        setTimeout(() => {
            $('.modal__bg').css({'display': ''})
        }, 150)
    }, 150)
})

$('.otveti__item-button').click((e) => {
    let button = $(e.currentTarget)
    let content = button.parent('.otveti__item-header').siblings('.otveti__item-main')
    content.toggleClass('otveti__item-main-active')
    button.toggleClass('otveti__item-button-active')
})