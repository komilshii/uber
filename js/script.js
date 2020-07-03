window.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu"),
    mobileMenuItem = document.querySelectorAll(".mobile-menu-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    mobileMenu.classList.toggle("mobile-menu-active");
  });

  mobileMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      mobileMenu.classList.toggle("mobile-menu-active");
    });
  });
});
