function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Chickenzz";

  header.appendChild(restaurantName);

  return header;
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
  content.appendChild(createFooter());
}

export default renderWebsite;
