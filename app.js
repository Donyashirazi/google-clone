const { doc } = require("prettier");

let sideBar = document.querySelector("#sideBar");
let sideNavigation = document.querySelector(".sideNavigation");
let gridContainer = document.querySelector(".gridContainer");
let firstMenu = document.querySelector("#firstMenu");
let secondMenu = document.querySelector("#secondMenu");
let fourthMenu = document.querySelector("#thirdMenu");

// sideBar.addEventListener("click", function () {
//   sideNavigation.classList.toggle("active");
// });

sideBar.onclick = function () {
  setTimeout(() => {
    gridContainer.classList.toggle("active");
  }, 500);
};
