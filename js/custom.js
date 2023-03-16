// about slick slider

$('.about-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    nextArrow:'.next',
    prevArrow:'.prev',
    responsive: [
      {
        breakpoint: 575 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // counter up 
  $('.counter-up h2').counterUp({
    delay: 10,
    time: 1000
});
// comment slick slide 

$('.comment_slide').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  arrows:true,
  nextArrow:'.next',
  prevArrow:'.prev',
  responsive: [
    {
      breakpoint: 575 ,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
  ]
});