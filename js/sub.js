
$(function () {

  $(window).load(function () {
    $('.introduceBox .top').addClass('active');
  });

  //선택
  $('.selectBox .selectBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(this).addClass('active');
      $(this).next().slideDown();
    }

  })

  $(".newsBox .slick").slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 577,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          centerMode: false,
          dots: false
        }
      }
    ]
  });

});
