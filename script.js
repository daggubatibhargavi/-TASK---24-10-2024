const data = [
  {
    imgSrc:
      "https://mrwallpaper.com/images/hd/surya-rubbing-his-neck-hd-erarnev90yw7ghfj.jpg",
    actor: "Suriya - Indian Actor",
    film: "7th Sense",
  },
  {
    imgSrc:
      "https://pbs.twimg.com/profile_images/1652302478346690563/7H-8y-OE_400x400.jpg",
    actor: "Dq",
    film: "Seetharamam",
  },

  {
    imgSrc:
      "https://pbs.twimg.com/profile_images/1652302478346690563/7H-8y-OE_400x400.jpg",
    actor: "Dq",
    film: "Seetharamam",
  },

  {
    imgSrc:
      "https://mrwallpaper.com/images/hd/surya-rubbing-his-neck-hd-erarnev90yw7ghfj.jpg",
    actor: "Suriya - Indian Actor",
    film: "7th Sense",
  },
  {
    imgSrc:
      "https://pbs.twimg.com/profile_images/1652302478346690563/7H-8y-OE_400x400.jpg",
    actor: "Dq",
    film: "Seetharamam",
  },
];
let mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);
mainContainer.style.display = "flex";
mainContainer.style.flexWrap = "wrap";
mainContainer.style.justifyContent = "space-evenly";
mainContainer.style.textAlign = "center";

function createCard(imgSrc, actor, film) {
  const contentDiv = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", imgSrc);
  let contentDiv2 = document.createElement("div");
  const pElement = document.createElement("p");
  pElement.textContent = actor;
  const spanElement = document.createElement("span");
  spanElement.textContent = film;
  contentDiv.append(contentDiv2);
  contentDiv2.style.display = "inline-block";
  contentDiv.append(imgElement, pElement, spanElement);
  contentDiv.style.border = "2px solid black";
  // pElement.style.display = "inline-block";
  // pElement.style.width = "300px";

  document.body.appendChild(contentDiv);
  mainContainer.appendChild(contentDiv);

  imgElement.addEventListener("mouseover", () => {
    imgElement.style.width = "200px";
    imgElement.style.padding = "20px";
    imgElement.style.backgroundColor = "lightblue";
    imgElement.style.transform = "scale(1.1) rotate(5deg)";
    imgElement.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
    imgElement.style.opacity = "0.9";
    pElement.style.background = "lightCoral";
    spanElement.style.background = "lightblue";
    contentDiv.style.width = "400px";
    contentDiv.style.margin = "40px";
  });

  imgElement.addEventListener("mouseout", () => {
    imgElement.style.width = "100px";
    imgElement.style.backgroundColor = "lightgrey";
    imgElement.style.transform = "scale(1) rotate(0deg)";
    imgElement.style.boxShadow = "none";
    imgElement.style.opacity = "1";
  });
}

for (let i = 0; i < data.length; i++) {
  setTimeout(() => {
    createCard(data[i].imgSrc, data[i].actor, data[i].film);
  }, i * 2000);
}
