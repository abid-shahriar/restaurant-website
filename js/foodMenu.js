import { foodData } from "./data.js";

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("preloaderFadeOut");
  }, 1000);
});

window.addEventListener("DOMContentLoaded", () => {
  // food menu section
  {
    const menuAppeteasers = document.querySelector(".menu-appeteasers .dishes");
    const menuMainDish = document.querySelector(".menu-mainDish .dishes");
    const menuDessert = document.querySelector(".menu-dessert .dishes");
    const menuDrinks = document.querySelector(".menu-drinks .dishes");

    foodData.slice(0, 12).forEach((food) => {
      insertTo(menuAppeteasers, food);
    });
    foodData.slice(7, 19).forEach((food) => {
      insertTo(menuMainDish, food);
    });
    foodData.slice(6, 18).forEach((food) => {
      insertTo(menuDessert, food);
    });
    foodData.slice(3, 15).forEach((food) => {
      insertTo(menuDrinks, food);
    });

    function insertTo(item, food) {
      let insertItem = `<div class="item">
      <div class="info">
        <h2>${food.title}</h2>
        <p>
          ${food.desc}
        </p>
      </div>
      <div class="price">
        <p>${food.price}$</p>
      </div>
    </div>`;

      item.insertAdjacentHTML("beforeend", insertItem);
    }
  }

  // navbar section
  {
    const nav = document.querySelector("nav");
    const navToggle = document.querySelector(".nav-toggle");

    (function fixedNav() {
      window.addEventListener("scroll", (e) => {
        const navHeight = nav.getBoundingClientRect().height;
        const totalHeight = navHeight + 100;
        const scrollHeight = window.pageYOffset;

        if (scrollHeight > totalHeight) {
          nav.classList.add("fixed-nav");
        } else {
          nav.classList.remove("fixed-nav");
        }
      });
    })();
    // navtoggle
    navToggle.addEventListener("click", (e) => {
      nav.classList.toggle("active");
    });

    // click anywhere else to toogle navbar
    window.addEventListener("click", (e) => {
      if (
        nav.classList.contains("active") &&
        e.target.classList[0] !== "navbar" &&
        e.target.classList[0] !== "nav-toggle"
      ) {
        nav.classList.remove("active");
      }
    });
  }
});
