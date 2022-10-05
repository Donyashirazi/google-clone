let sideBar = document.querySelector("#sideBar");
let sideNavigation = document.querySelector(".sideNavigation");
let gridContainer = document.querySelector(".gridContainer");

// sideBar.addEventListener("click", function () {
//   sideNavigation.classList.toggle("active");
// });

sideBar.onclick = function () {
  setTimeout(() => {
    gridContainer.classList.toggle("active");
  }, 500);
};

document.onclick = function (screenClick) {
  if (screenClick.target.id !== gridContainer) {
    gridContainer.classList.remove("active");
  }
};
