// const { doc } = require ("prettier");

// const { firstAid } = require("fontawesome");

let nav = document.querySelectorAll(".nav");
let sideMenu = document.querySelectorAll(".sideMenu");
let sideNavigation = document.querySelector("#sideNavigation");
let sideBar = document.querySelector("#sideBar");
let gridContainer = document.querySelector(".gridContainer");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let fourth = document.querySelector("#fourth");

for (let x = 0; x < nav.length; x++) {
  nav[x].addEventListener("click", function abc() {
    sideMenu[x].classList.toggle("active");
  });
  document.onclick = function (screenClick) {
    if (screenClick.target.getAttribute("class") !== "sideMenu active") {
      nav[x].removeEventListener("click", abc);
    }
  };
}
