
$(".search-icon").click(function(){
    $(".search-ber").toggleClass("search-toggole")
})
$('.hero-area-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    aerrow:true,
    prevArrow:'<i class="fas fa-chevron-left parrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right narrow"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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

