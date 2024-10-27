$('.main__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
})
$('.obratka__formFile input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.obratka__formFile').find('.obratka__formFilename').html(file.name);
});
$('.obratka__formFileModal input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.obratka__formFileModal').find('.obratka__formFilenameModal').html(file.name);
});
const fileInput = document.querySelector('.obratka__formFileInput');
const fileLabel = document.querySelector('.obratka__formFile');

fileLabel.addEventListener('click', () => {
    fileInput.click();
});
const fileInputModal = document.querySelector('.obratka__formFileInputModal');
const fileLabelModal = document.querySelector('.obratka__formFileModal');

fileLabelModal.addEventListener('click', () => {
    fileInputModal.click();
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