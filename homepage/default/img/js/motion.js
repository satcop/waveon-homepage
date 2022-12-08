/*�щ씪�대뵫 �좊땲硫붿씠��*/
$(function () {
		
  var filterList = {
  
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $('#work').mixitup({
        targetSelector: 'li',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap',
        // call the hover effect
        onMixEnd: filterList.hoverEffect()
      });				
    },	
          
    
      // Simple parallax effect
  hoverEffect: function () {
    
      
      }		
    
    };
        
  // Run the show!
  filterList.init();
  
  
});	


$(document).ready(function() {
$('.listBtn').click(function() {	
    anioption = { time:0.8, easing:'easeOutCubic' };		
      $('.overlay').animate({"right": "0%"}, anioption); 
 $('.blocker').animate({"opacity": "0.5"}, anioption).show(); 
 $('body').addClass("noScroll"); 
 
    });

$('.overlay-close, .blocker').click(function(){
  anioption = { time:0.6, easing:'linear' }; 
    $('.overlay').animate({"right": "-100%"}, anioption); 
$('.blocker').animate({"opacity": "0"}, anioption).hide();
$('.project_area').animate({"right": "-100%"}, anioption); 
    $('body').removeClass("noScroll"); 
 $('.project_area').hide();
  });


$('.request').click(function() {	
$('.project_area').removeClass("fix").show();
    anioption = { time:0.8, easing:'easeOutCubic' };			
      $('.overlay').animate({"right": "0%"}, anioption); 
 $('.blocker').animate({"opacity": "0.5"}, anioption).show(); 
 $('body').addClass("noScroll"); 
          $('.project_area').animate({"right": "-20px"}, anioption); 
    });

$('.close').click(function(){	 
  anioption = { time:0.6, easing:'linear' }; 
    $('.project_area').animate({"right": "-100%"}, anioption);
   $('.project_area').addClass("fix").hide(0.8); 

  });



/*�ы듃�대━�� �щ씪�대뵫*/

$(function(){
$("#main_work > li").hover(
function(){	
  anioption = { time:0.5, easing:'easeOutCubic' };  
 $(this).find('.hover').animate({"top": "0px"}, anioption);
}, function(){
 $(this).find('.hover').animate({"top": "250px"},anioption);
});





});

});

window.onload = function()
{ // div height �ㅼ젙
setDivHeight('work');
}
function setDivHeight(objSet, objTar)
{ 
var objSet   = document.getElementById(objSet); 
var objTarHeight= document.getElementById(objTar).offsetHeight;
objSet.style.height  = objTarHeight + "px";
} 
/*�섎윺�됱뒪 �ㅽ겕濡�*/

$(document).ready(function() {
var s = skrollr.init();

    var $head = $( '#header' );
    $( '.content' ).each( function(i) {
      var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );
      $el.waypoint( function( direction ) {

        if( direction === 'down' && animClassDown ) {
          $head.attr('class', ' ' + animClassDown);
          // $('#header.show h1 a img').attr('src','/homepage/bizdemo128056/img/logo.png')
          $('#header.show h1 a img').attr('src','/homepage/waveon/logo_en_origin.png')
        }
        else if( direction === 'up' && animClassUp ){
          $head.attr('class', '' + animClassUp);
          $('#header.hide h1 a img').attr('src','/homepage/waveon/logo_en_origin.png')
        }
      }, { offset: '0%' } );
    } );



});


/*鍮꾩＜�� �곸뿭 釉뚮씪�곗��� �곕Ⅸ 由ъ궗�댁쭠*/

 $(document).ready(function(){ 
 $('.slider, .sectionMain').css('height', $(window).height() - 0 );
 //$('.listBox').css({marginTop:"-"+$(".listBox").height()/2+"px"});
 $(window).resize(function() {
     // $('.slider, .sectionMain').css('height', $(window).height() - 0 );
//	 $('.listBox').css({marginTop:"-"+$(".listBox").height()/2+"px"});		

 });
        

 

/*�щ씪�대뵫*/ 

  var quick = $('.downBtn a, .request, .TopScroll a, .bottom_arrow a'),
  easi = 'easeInOutExpo',
  speed = 1000;
quick.on('click', function(){
  var $this = $(this),
    href = $this.attr('href'),
    body = $('html, body'),
    scrollPosition = $(href).position().top;
if(href == null){return false;}
  body.stop().animate({
    scrollTop : scrollPosition
  }, {
    duration:speed, easing: easi
  });
  return false;
});  
}); 



/*�ㅻ툕�앺듃 �먮룞 �뚯븘媛��� �좊땲硫붿씠��*/



$(document).ready(function(){
  $('#skroll-body p').everyTime(1000, function(){
    $(this).animate({'top':25},1000).animate({'top':0},1000);
  });
  

  if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
  { 
    //$("#header").css("position", "absolute"); 
    $("#boxWrapp .subVisual, .sectionMain").css("background-attachment", "scroll");
    $(".slides .cont").css("background-attachment", "scroll"); 
  };
});	


  $("#cmTopScroll").click(function (){ $("html, body").animate({scrollTop:0}, 200); });
  $(window).scroll(function (){ 
var top = $(document).scrollTop(); 
if(top > 300){
   $("#cmTopScroll").stop().animate({"bottom":40}, 250);
      }else{
          $("#cmTopScroll").stop().animate({"bottom":-200}, 250);
      }
  });

