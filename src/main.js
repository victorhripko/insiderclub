import { formInit } from "./components/form/form";
import { initVideo } from "./components/video/video";

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.querySelectorAll('[data-menu="toggle"]');
  const scrollToButtons = document.querySelectorAll("[data-scroll-to]");
  const header = document.querySelector("header");
  const form = document.querySelector("form.form");
  const videoWrap = document.querySelector(".section__media--video");
  const mediaQueryScreenSize = 1024;
  const mql = window.matchMedia(`(min-width: ${mediaQueryScreenSize}px)`);
  let isMenuOpen = false;
  let headerOffset = header.clientHeight;

  mql.addEventListener("change", function (event) {
    headerOffset = event.matches ? 0 : header.clientHeight;

    if (event.matches && isMenuOpen) {
      menuToggle();
    }
  });

  window.addEventListener("load", () => {
    headerOffset =
      window.innerWidth >= mediaQueryScreenSize ? 0 : header.clientHeight;
  });

  toggleMenuButton.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      menuToggle();
    });
  });

  scrollToButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const scrollSection = document.querySelector(
        `[data-section=${el.dataset.scrollTo}]`
      );

      if (!scrollSection) return;

      scrollTo(scrollSection);
    });
  });

  const scrollTo = (selector) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        selector.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        headerOffset,
    });

    if (isMenuOpen) {
      menuToggle();
    }
  };

  function menuToggle() {
    const burgerButton = document.querySelector(".header__hamburger");
    const headerNav = document.querySelector(".header__nav");

    burgerButton.classList.toggle("header__hamburger--active", !isMenuOpen);
    headerNav.classList.toggle("header__nav--open", !isMenuOpen);

    isMenuOpen = !isMenuOpen;
  }

  formInit(form);
  initVideo('video', 'pe0sXa777bo')
});
