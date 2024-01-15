$('.myslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay : true,
  autoplaySpeed : 1800,
  pauseOnHover : true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.btn-top').on("click", function (e) {
  $.scrollTo(0, 30);
});
$(window).scroll(function(){
  if($(this).scrollTop() > 50){
    $('header , .btn-top ').addClass('active');
  }else{
    $('header , .btn-top ').removeClass('active');
  }
});
// Trigger
$('.trigger').on("click",function(){
  $(this).toggleClass('active')
  $('.gnb').toggleClass('active')
});
$('.gnb a').on("click",function(){
  $('.gnb, .trigger').removeClass('active')
});
