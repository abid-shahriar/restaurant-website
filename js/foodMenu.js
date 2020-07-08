const foodData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "3 Chicken Wings",
    category: "Appeteasers",
    price: 250.0,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus accusantium dolores perferendis quas tempore deleniti quasi hic labore, numquam saepe!`,
  },
  {
    id: 11,
    title: "Chicken Livers and Portuguese Roll",
    category: "Appeteasers",
    price: 130.0,
    desc: `Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce`,
  },
  {
    id: 12,
    title: "Spicy Mixed Olives",
    category: "Appeteasers",
    price: 30.0,
    desc: `Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce`,
  },
  {
    id: 13,
    title: "Hummus with PERI-PERI Drizzle",
    category: "Appeteasers",
    price: 210.0,
    desc: `Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita`,
  },
  {
    id: 14,
    title: "Red Pepper Dip",
    category: "Appeteasers",
    price: 100.0,
    desc: `Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips`,
  },
  {
    id: 15,
    title: "PERi-PERi Wedges",
    category: "Appeteasers",
    price: 70.0,
    desc: `Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips`,
  },
  {
    id: 16,
    title: "Corn-On-The-Cob",
    category: "Appeteasers",
    price: 30.0,
    desc: `Quarter Chicken Marinated with PERi-PERi Sauce and Grilled`,
  },
  {
    id: 17,
    title: "1/2 Chicken",
    category: "lunch",
    price: 90.0,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "5 Chicken Wings",
    category: "lunch",
    price: 30.0,
    desc: `Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita`,
  },
  {
    id: 19,
    title: "Wing Roulette",
    category: "lunch",
    price: 30.0,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 20,
    title: "Whole Chicken",
    category: "lunch",
    price: 50.0,
    desc: `Whole Chicken Marinated in PERi-PERi Sauce and Grilled`,
  },
];

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
