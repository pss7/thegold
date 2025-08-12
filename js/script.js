$(function () {

  //팝업
  $(window).load(function () {
    $('.popupBox').fadeIn();
  });

  $(".popupBox .slick").slick({
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
    speed: 1500,
    prevArrow: $('.popupBox .prev'),
    nextArrow: $('.popupBox .next'),
  });

  //헤더 
  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  //모바일 메뉴
  $('#headerWrap .mobileMenuBtn').click(function () {
    $('#headerWrap .mobileMenuWrap').addClass('active');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#headerWrap .mobileMenuWrap').removeClass('active');
  });

  //스크롤 시 top 버튼 fadeIn, fadeOut
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

  //상단으로 이동
  $("#top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


});

