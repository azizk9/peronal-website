var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
  sidemeu.style.display = "block";
}
function closemenu() {
  sidemeu.style.right = "-200px";
  // sidemeu.style.display = "none";
}

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
