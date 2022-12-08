$(document).ready(function(){

  /*slick 怨듯넻*/
  $('.pause').click(function() {
      $(this).siblings("div").slick('slickPause');
      $(this).siblings("ul").slick('slickPause');
      $(this).hide();
      $(this).siblings(".play").show();
  });
  $('.play').click(function() {
      $(this).siblings("div").slick('slickPlay');
      $(this).siblings("ul").slick('slickPlay');
      $(this).hide();
      $(this).siblings('.pause').show();
  });
  
   
   
  
  /*�뚮┝李�*/
  $('.popup_li').slick({
     //rows:2,
     //slidesPerRow:2,
     slidesToShow:3,
     arrows:true,
     autoplay: true,
     autoplaySpeed:5000,
     responsive: [
     {
     breakpoint: 1000, //�붾㈃ �ъ씠利� 960px
     settings: {
         slidesToShow:2
       }
     },
   
     {
     breakpoint: 481, //�붾㈃ �ъ씠利� 960px
     settings: {
         slidesToShow:1
       }
     }
    ]
  });
  
  });