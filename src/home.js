function createHomepage() {
  const homePage = document.createElement("div");
  homePage.classList.add("homePage");

  const homePicture = document.createElement("img");
  homePicture.setAttribute("id", "homeImage");
  homePicture.src = "images/chicken-chef.png";

  homePage.appendChild(homePicture);

  return homePage;
}

function homeLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomepage());
}
export default homeLoad;
