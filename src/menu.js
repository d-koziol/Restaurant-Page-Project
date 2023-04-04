function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
}

function menuLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default menuLoad;
