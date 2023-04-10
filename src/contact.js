function createContant() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const address = document.createElement("p");
  address.textContent = "Address: Kruszwicka 1, 85-213 Bydgoszcz";

  const hours = document.createElement("p");
  hours.textContent = `Monday-Friday: 7am-8pm
                       Sat-Sun: 8am-7pm`;

  const phone = document.createElement("p");
  phone.textContent = "Phone: (323)534-23-432";

  const map = document.createElement("div");
  map.classList.add("map");
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76613.46161565487!2d17.85340306249999!3d53.1250817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313b3d4d2088d%3A0xe1053c84a02493c8!2sKFC%20Bydgoszcz%20Casino!5e0!3m2!1spl!2spl!4v1680899077571!5m2!1spl!2spl"
      width="500"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>`;
  map.cookie = "username=John Doe; SameSite=Strict;";

  contact.appendChild(address);
  contact.appendChild(hours);
  contact.appendChild(phone);
  contact.appendChild(map);

  return contact;
}

function contactLoad() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContant());
}

export default contactLoad;
