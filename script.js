document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".js-menu-bar");

  const toggleMenu = () => {
    document.body.classList.toggle("mobile-menu-active");
  };

  document
    .querySelector(".js-menu-mobile")
    .addEventListener("click", toggleMenu);
  document
    .querySelector(".js-menu-mobile-close")
    .addEventListener("click", toggleMenu);

  menuBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
