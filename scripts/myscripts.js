
//FOR COMPATIBILITY OF SCROLLY PROPERTY ACCROSS BROWSERS
window.pageYOffset == window.scrollY;

//
var nav = document.querySelector(".fixed-nav");
var last_known_scroll_position = 0;
var scrolling = false;
var homeHeight = document.querySelector(".home").scrollHeight;

//FUNCTION TO SHOW OR HIDE THE CLASS "HIDE" OF THE NAVBAR
function showOrHide(scrollpos) {
  if (last_known_scroll_position > homeHeight) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

//CALL TO FUNCTION IN THE EVENT OF SCROLLING THE PAGE
window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!scrolling) {

    window.requestAnimationFrame(function() {
      showOrHide(last_known_scroll_position);
      scrolling = false;
    });

    scrolling = true;

  }
})
