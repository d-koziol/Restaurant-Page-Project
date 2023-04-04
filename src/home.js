function createHomepage() {
  const homePage = document.createElement("div");
  homePage.classList.add("homePage");

  const homePicture = document.createElement("img");
  homePicture.setAttribute("id", "homeImage");
  homePicture.src = "images/chicken-chef.png";

  const para = document.createElement("p");
  para.setAttribute("id", "homePara");
  para.textContent = "Since 1992 We are The Chickenzz";

  homePage.appendChild(para);
  homePage.appendChild(homePicture);

  return homePage;
}

function homeLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomepage());
}
export default homeLoad;
