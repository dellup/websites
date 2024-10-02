$('.header__button').click((e) => {
    let button = $(e.currentTarget)
    let content = button.siblings('.header__menu')
    content.toggleClass('header__menu-active')
})

$('.ii__item-button').click((e) => {
    let button = $(e.currentTarget)
    let content = button.parent('.ii__item-header').siblings('.ii__item-main')
    content.toggleClass('ii__item-main-active')
    button.toggleClass('ii__item-button-active')
})
AOS.init();