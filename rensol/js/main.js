$('.otveti__itemButton').on('click', function () {
    $(this).parent().find('.otveti__itemInfo').toggleClass('otveti__itemInfo-active');
    $(this).toggleClass('otveti__itemButton-active');
});


$('.header__burg').on('click', function () {
    $('.header__block').toggleClass('header__block-active');
    $('.header__menu').toggleClass('header__menu-active');
});
