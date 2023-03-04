document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".js-menu-bar");

  document.querySelector(".js-menu-mobile").addEventListener("click", () => {
    document.body.classList.toggle("mobile-menu-active");
  });

  const hideMenu = () => {
    document.body.classList.remove("mobile-menu-active");
  };

  document
    .querySelector(".js-menu-mobile-close")
    .addEventListener("click", hideMenu);

  menuBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", hideMenu);
  });
});
