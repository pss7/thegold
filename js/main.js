
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  //후기 슬라이드
  $("#reviewWrap .slick").slick({
    variableWidth: true,
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    centerMode: true,
    speed: 1500,
    prevArrow: $('.mainBox .leftBox .prev'),
    nextArrow: $('.mainBox .leftBox .next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false
        }
      }
    ]
  });

  //수상 슬라이드 영역 
  $("#slideWrap .slick").slick({
    variableWidth: true,
    autoplay: false,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    centerMode: true,
    speed: 1500,
    responsive: [
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

  //탭 슬라이드
  $('#infoWrap03 .tabBox .tabBtn').on('click', function () {

    let index = $(this).index();

    $('#infoWrap03 .slick').slick('slickGoTo', index);
    $('#infoWrap03 .tabBox .tabBtn').removeClass('active');
    $(this).addClass('active');

  });

  $('#infoWrap03 .slick').on('afterChange', function (event, slick, currentSlide) {
    $('#infoWrap03 .tabBox .tabBtn').removeClass('active');
    $('#infoWrap03 .tabBox .tabBtn').eq(currentSlide).addClass('active');
  });

  $("#infoWrap03 .slick").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('#infoWrap03 .prev'),
    nextArrow: $('#infoWrap03 .next'),
  });

  //후기 영상
  $("#reviewVideoWrap .slick").slick({
    variableWidth: true,
    autoplay: false,
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
    centerMode: false,
    speed: 1500,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          variableWidth: false,
        }
      }
    ]
  });


});
