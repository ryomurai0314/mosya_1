$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 4;
    if(bgPosition){
      $('.main_v_layer1').css('background-position', 'center -'+(75+ (-bgPosition)) + 'px');
    }
  });