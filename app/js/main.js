$(function(){

  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
  });
 
  var products = document.querySelector('[data-ref="products"]');
  var design = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup('.products', config);
  var mixer2 = mixitup('.design', config);
});