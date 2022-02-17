$(document).ready(function() {

    let isOpen = false;

   $('.j-burger').on('click', function() {
    // if (isOpen) {
    //   $('.j-menu').slideUp();
    //   isOpen = false;
    // } else {
    //   $('.j-menu').slideDown();
    //   isOpen = true;
    // }

      $('.j-menu').slideToggle();
  });

  // Табы на странице контактов

  $('.j-tabs-link').on('click', function(event) {
    event.preventDefault();

    const index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-tabs-content').removeClass('active');
    $('.j-tabs-content').eq(index).addClass('active');

  });

  // Фильтры у каталога

    $('.j-filter-link').on('click', function(event) {
      event.preventDefault();

      const filter = $(this).data ('filter');
      console.log(filter);

      $('.j-filter-link').removeClass('active');
      $(this).addClass('active');

      if (filter === 'all') {
        $('.j-portfolio-item').show();
        return;
      }

      $('.j-portfolio-item').each(function() {
        const type = $(this).data('type');

        if (type === filter) {
          $(this).show();
          return;
        }

        $(this).hide();
      });

    });

    // Аккордионы

    let prevBtn;

    $('.j-accordion-btn').on('click', function(){

      if (prevBtn === $(this) [0] ) {
        $(this).next().slideToggle();
        $(this).find('.j-faq-icon').toggleClass('faq-icon-minus');
        return;
      }

      $('.j-accordion-btn').next().slideUp();
      $('.j-faq-icon').removeClass('faq-icon-minus');
      $(this).find('.j-faq-icon').addClass('faq-icon-minus');
      $(this).next().slideToggle();
      prevBtn = $(this) [0];

    });

      // Slider

      $('.j-reviews-content').slick();

      // Portfolio



});
