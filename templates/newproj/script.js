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

const form = document.querySelector(".contactForm");
const msgEl = document.getElementById("msg");

async function handleSubmit(e) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxFPOumeDbJiqgWAk-0amckNNlNJFnw_qsVxtUCz0NdFsgIjAVks72krB6x-Q1HiuTTzw/exec";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  e.preventDefault();

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: {
        name,
        email,
        message,
      },
    });

    msgEl.innerHTML = "Message sent successfully!";
    setTimeout(() => (msg.innerHTML = ""), 5000);
    form.reset();
  } catch (error) {
    console.error("Error!", error.message);
    msgEl.innerHTML = "Failed to send the message!";
  }
}

form.addEventListener("submit", handleSubmit);
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
