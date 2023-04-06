import homeLoad from "./home";
import menuLoad from "./menu";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Chickenzz";

  header.appendChild(restaurantName);

  return header;
}
function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "HenHouse";
  homeButton.addEventListener("click", () => {
    homeLoad();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Chickens";
  menuButton.addEventListener("click", () => {
    menuLoad();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Cluck Us";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const authorName = document.createElement("p");
  authorName.textContent = "Copyright © Damian Koziol";

  footer.appendChild(authorName);
  return footer;
}

function renderWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  homeLoad();
}

export default renderWebsite;
