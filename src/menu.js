function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
}

function createDish(name, description) {
  const dish = document.createElement("div");
  dish.classList.add = "dish-card";

  const dishName = document.createElement("h2");
  dishName.textContent = name;

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;

  const dishPic = document.createElement("img");
  dishPic.src = `images/dish/${name.toLowerCase()}.png`;
  dishPic.alt = `Picture of ${name}`;

  createMenu.appendChild(dishPic);
  createMenu.appendChild(dishName);
  createMenu.appendChild(dishDescription);

  return createDish;
}

function menuLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default menuLoad;
