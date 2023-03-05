$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

var menu = document.getElementById("bar");
var item = document.getElementById("navbarOne");

item.style.right = "-360px";
menu.onclick = function () {
  /* body... */
  if (item.style.right == "-360px") {
    item.style.right = "0";
    item.style.transition = "all 0.5s ease";
  } else {
    item.style.right = "-360px";
  }
};
