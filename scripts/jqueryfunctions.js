$(document).ready(function() {
  var sections = $('section');
  var nav = $(".fixed-nav");
  var winWidth = $(window).width();


//ACTIVATE LINKS IN NAVBAR

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var curSection = $(this);
      var top = curSection.offset().top;
      var bottom = top + curSection.height();

      if (cur_pos >= (top - 150) && cur_pos < (bottom - 150) ) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        curSection.addClass('active');
        nav.find('a[href="#'+ curSection.attr('id')+'"]').addClass('active');
        }
    });
  });

  // HAMBURGER MENU
  $('.toggle, .hamburger li').click(function() {
    $(".sidebar").toggleClass("show");
  })
});
