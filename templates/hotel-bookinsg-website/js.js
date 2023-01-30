// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Get target element ID
    const targetId = event.target.getAttribute("href");

    // Scroll to target element
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Get all section elements
const sections = document.querySelectorAll("section");

// Add scroll event listener to window
window.addEventListener("scroll", () => {
  // Get current scroll position
  const scrollPos = window.scrollY;

  // Loop through sections and update active navigation link
  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});