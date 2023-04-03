function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Chickenzz";

  header.appendChild(restaurantName);

  return header;
}

function renderWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
}
