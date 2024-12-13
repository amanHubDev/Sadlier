$(document).ready(function(){
  $(".slick-slider").slick({
    slidesToShow: 5,  // How many slides to show at once
    slidesToScroll: 1,  // How many slides to scroll at once
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // Time interval between slides in ms
    infinite: true,  // Enable infinite looping to restart the carousel
    arrows: false,  // Hide navigation arrows (optional)
    dots: true  // Enable dots navigation (optional)
  });
});
