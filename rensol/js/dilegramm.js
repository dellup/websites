$('.slider__block').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 5,
    arrows: false,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 4
            }
        },
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            arrows: false,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 1
          }
        }
      ]
  });
