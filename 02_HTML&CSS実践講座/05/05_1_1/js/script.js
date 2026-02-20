const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".main-nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  /* buttom closed */
  if (btn.innerHTML === "Menu") {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Menu";
  }
});
