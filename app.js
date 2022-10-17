// const { doc } = require ("prettier");

let nav = document.querySelectorAll(".nav");
let sideMenu = document.querySelectorAll(".sideMenu");
let sideNavigation = document.querySelector("#sideNavigation");
let sideBar = document.querySelector("#sideBar");
let gridContainer = document.querySelector(".gridContainer");

for (let x = 0; x < nav.length; x++) {
  nav[x].addEventListener("click", function () {
    sideMenu[x].classList.toggle("active");
  });
}
