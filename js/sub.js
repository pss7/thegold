
$(function () {

  $(window).load(function () {
    $('.introduceBox .top').addClass('active');
    AOS.init({
      duration: 2000
    });
    $('.productDetailBox .titleBox_01').addClass('active');
    $('#subWrap .topBox').addClass('active');
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

  //비전 탭
  $('.visionBox .coreValuesList_0602 > li a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $('.visionBox .coreValuesTextBox_0604').slideUp();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
    } else {
      $('.visionBox .coreValuesTextBox_0604').hide();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().find('.coreValuesTextBox_0604').slideDown();
    }

    return false;

  });

  //입-출금 신청
  $('.applicationBox .contentBox').hide();
  $('.applicationBox .contentBox').first().show();

  $('.applicationBox .tabBox .tab').click(function () {

    $('.applicationBox .tabBox .tab').removeClass('active');
    $(this).addClass('active');

    let idx = $(this).index();

    $('.applicationBox .contentBox').hide();
    $('.applicationBox .contentBox').eq(idx).show();

  });

  $('.applicationBox .inquiryBtn').click(function () {
    $('.issuedModalWrap').addClass('active');
  });

  $('.issuedModalWrap .modalCloseBtn').click(function () {
    $('.issuedModalWrap').removeClass('active');
  });

  //자주 묻는 질문 
  $('.questionBox .questionList li a').click(function () {
    if ($(this).hasClass('active')) {
      $('.questionBox .questionList li a').removeClass('active');
      $('.questionBox .questionList li a').next().slideUp();

    } else {
      $('.questionBox .questionList li a').removeClass('active');
      $('.questionBox .questionList li a').next().slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
    return false
  })

  //모달
  $('.detail_btn').click(function () {
    $('.productModalWrap').addClass('active');
    $('.detail_btn02').addClass('active');
  })
  $('.productModalCloseBtn').click(function () {
    $('.productModalWrap').removeClass('active');
    $('.detail_btn02').removeClass('active');
  })

});
