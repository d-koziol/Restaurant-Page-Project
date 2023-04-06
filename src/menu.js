function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createDish(
      "Creamy",
      "When it comes to chicken breast recipes, it's hard to beat this one. The sauce is simple but so flavorful thanks to garlic, tomatoes, and most importantly, cream. It's bright and easy and just as good in the summer as it is in the winter, whether you're craving comfort food or a dinner fancy enough for guests."
    )
  );

  menu.appendChild(
    createDish(
      "Chicken&Rice",
      "This dish started as way to use leftover rice that has dried out some and may not be great on its own, but is still perfectly edible. The addition of oil and soy sauce and veggies and meat spruce up the rice for a delicious meal."
    )
  );

  menu.appendChild(
    createDish(
      "Za'atar",
      "This sheet-pan dinner is our newest fave: Bone-in chicken thighs, baby potatoes, broccoli, and red onion are all tossed in a simple olive oil, lemon juice, and za’atar marinade, then roasted to crispy, schmaltzy perfection. To kick it up another notch, we’re drizzling it all in a creamy tahini sauce to finish it off. "
    )
  );

  menu.appendChild(
    createDish(
      "Chicken&Cacciatore",
      "The dish emerged in the 14th century as a means to feed hunters who’d been away tracking for long periods of time, using the meat, mushrooms, and herbs they’d collected along the way. While we may not have been out hunting, after a long day this dish is still particularly comforting, not in the least because it all comes together in one pot."
    )
  );

  menu.appendChild(
    createDish(
      "Chicken&Parmesan",
      "The fact that crispy golden chicken can be achieved without the use of any oil whatsoever is amazing (not to mention how quickly the air fryer can do it!). There's no need to turn on your oven or make a whole oily mess on your stovetop: This chicken Parm tastes every bit as good as the traditional version with much less effort to get there."
    )
  );

  return menu;
}

function createDish(name, description) {
  const dish = document.createElement("div");
  dish.classList.add("dish-card");

  const dishName = document.createElement("h2");
  dishName.textContent = name;

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;

  const dishPic = document.createElement("img");
  dishPic.src = `images/dish/${name.toLowerCase()}.png`;
  dishPic.alt = `Picture of ${name}`;
  dishPic.classList.add("dish-pic");

  dish.appendChild(dishName);
  dish.appendChild(dishPic);
  dish.appendChild(dishDescription);

  return dish;
}

function menuLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default menuLoad;
