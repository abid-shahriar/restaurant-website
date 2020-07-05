import { foodData } from "./data.js";

window.addEventListener("DOMContentLoaded", () => {
  // food menu section
  {
    const menuAppeteasers = document.querySelector(".menu-appeteasers");
    const menuMainDish = document.querySelector(".menu-mainDish");
    const menuDessert = document.querySelector(".menu-dessert");
    const menuDrinks = document.querySelector(".menu-drinks");

    foodData.slice(0, 9).forEach((food) => {
      insertTo(menuAppeteasers, food);
    });
    foodData.slice(7, 16).forEach((food) => {
      insertTo(menuMainDish, food);
    });
    foodData.slice(6, 15).forEach((food) => {
      insertTo(menuDessert, food);
    });
    foodData.slice(10, 19).forEach((food) => {
      insertTo(menuDrinks, food);
    });

    function insertTo(item, food) {
      let insertItem = `<div class="dishes">
    <div class="item">
      <div class="info">
        <h2>${food.title}</h2>
        <p>
          ${food.desc}
        </p>
      </div>
      <div class="price">
        <p>$${food.price}</p>
      </div>
    </div>
  </div>`;

      item.insertAdjacentHTML("beforeend", insertItem);
    }
  }
});
