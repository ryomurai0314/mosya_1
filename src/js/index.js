// $(window).on('scroll', function(){
//     var scrollTop = $(window).scrollTop();
//     var bgPosition = scrollTop / 3;
//     if(bgPosition){
//       $('.main_v_layer1').css('background-position', 'center -'+(75+ (-bgPosition)) + 'px');
//     }
// });


$('.main_menu').hover(
  function() {
    $(".sub_menu:not(:animated)", this).slideDown(300);
  },
  function() {
    $(".sub_menu", this).slideUp(300);
  }
);

$('.nav_btn a').on('click',function(e){
  e.preventDefault();
  $('nav').slideToggle(300);
  if( $('.nav_btn a').hasClass('close')){
    console.log("hogehoge");
    $('.nav_btn a').removeClass('close');
    $('.nav_btn a').addClass('open');
  }else {
    console.log("hoge");
    $('.nav_btn a').removeClass('open');
    $('.nav_btn a').addClass('close');
  }
});

$('.main_menu').mouseover(function(e) {
  $(this).find('.menu_trigger').addClass("open");
})
$('.main_menu').mouseout(function(e) {
  $(this).find('.menu_trigger').removeClass("open");
})