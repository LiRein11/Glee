$(function(){

  $('.catalog__filter-btn').on('click', function () {
    $('.catalog__filters').slideToggle();
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.related__buttons').on('click', function (e) {
    e.preventDefault();
    $('.related__buttons').removeClass('related__buttons--active');
    $(this).addClass('related__buttons--active');

    $('.related__items').removeClass('related__items--active');
    $($(this).attr('href')).addClass('related__items--active');
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active'); 

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-item__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $('.catalog-content__item-buttons--cartone').on('click', function () {
    $('.catalog-content__item-button--one').css("display", "inline-block");
  });
  $('.catalog-content__item-button--one').on('click', function () {
    $('.catalog-content__item-button--one').css("display", "none");
  });

  $('.catalog-content__item-buttons--carttwo').on('click', function () {
    $('.catalog-content__item-button--two').css("display", "inline-block");
  });
  $('.catalog-content__item-button--two').on('click', function () {
    $('.catalog-content__item-button--two').css("display", "none");
  });

  $('.catalog-content__item-buttons--cartthree').on('click', function () {
    $('.catalog-content__item-button--three').css("display", "inline-block");
  });
  $('.catalog-content__item-button--three').on('click', function () {
    $('.catalog-content__item-button--three').css("display", "none");
  });

  $('.catalog-content__item-buttons--cartfour').on('click', function () {
    $('.catalog-content__item-button--four').css("display", "inline-block");
  });
  $('.catalog-content__item-button--four').on('click', function () {
    $('.catalog-content__item-button--four').css("display", "none");
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  })

  $(".star-line").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  })

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price-from').text(data.from);
      $('.filter-price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price-from').text(data.from);
      $('.filter-price-to').text(data.to);
    },
  });
  
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