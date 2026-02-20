const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const Images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const ImageTexts = [
  "Closeup of a human eye",
  "Rock that looks like a wave",
  "Purple and white pansies",
  "Section of wall from a pharoah's tomb",
  "Large moth on a leaf",
];

/* Looping through images */
for (const [index, value] of Images.entries()) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${value}`);
  newImage.setAttribute("alt", ImageTexts[index]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", `images/${value}`);
    displayedImage.setAttribute("alt", ImageTexts[index]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = `rgba(0, 0, 0, 0)`;
  }
});
