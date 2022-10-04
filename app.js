let sideBar = document.querySelector("#sideBar");
let sideNavigation = document.querySelector(".sideNavigation");
let gridContainer = document.querySelector(".gridContainer");

// sideBar.addEventListener("click", function () {
//   sideNavigation.classList.toggle("active");
// });

sideBar.onclick = function () {
  setTimeout(() => {
    gridContainer.classList.toggle("active");
  }, 1000);
};
