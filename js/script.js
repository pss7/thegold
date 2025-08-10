$(function () {

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


  //푸터
  $(".footerBanner .slickWrap .slick").slick({
    variableWidth: true,
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('.footerBanner .control .prev'),
    nextArrow: $('.footerBanner .control .next'),
  });

  $('.footerBanner .slickWrap .control button').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      $(this).hide();
      $('.footerBanner .slickWrap .control .play').show();
      $('.footerBanner .slickWrap .slick').slick('slickPause');
    } else if ($(this).hasClass('play')) {
      $(this).hide();
      $('.footerBanner .slickWrap .control .pause').show();
      $('.footerBanner .slickWrap .slick').slick('slickPlay');
    }
  });

});
