// Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute("href"))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  });
});
// Load
window.addEventListener("load", function () {
  document.body.classList.add("window-loaded");
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile",
  });
});
// Scroll
window.addEventListener("scroll", function () {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

// header js
$(".header-wrapper .menu-trigger").click(function () {
  $("body").toggleClass("menu-open");
});

$(window).scroll(function () {
  var headerSpacer = $(".header-wrapper .header-spacer"); // Target the element to check the scroll position
  var scrollPosition = $(window).scrollTop(); // Get the current scroll position
  var headerSpacerOffset = headerSpacer.offset().top; // Get the offset position of the element

  // Check if scroll position has passed the target element's position
  if (scrollPosition > headerSpacerOffset) {
    $("body").addClass("darkHeader");
    console.log("reached");
  } else {
    $("body").removeClass("darkHeader");
    console.log("not reached");
  }
});

$(".header-wrapper .nav .mega-menu>ul>li.menuItem.has-submenu>a").click(
  function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .toggleClass("active-child")
      .siblings()
      .removeClass("active-child");
    $(this)
      .next()
      .slideToggle(250)
      .parent()
      .siblings()
      .children(".mega_menu_wrapper ")
      .slideUp(250);
  }
);
$(".header-wrapper .overlay").click(function () {
  $("body").removeClass("menu-open");
});

function setMinHeight() {
  var headerStickyHeight = $(".header-sticky").outerHeight();
  $(".header-wrapper").css("min-height", headerStickyHeight);
}
$(document).ready(function () {
  setMinHeight();
});
$(window).resize(function () {
  setMinHeight();
});
$(".closeTrigger").click(function () {
  setMinHeight();
});
