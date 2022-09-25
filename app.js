let sideBar = document.querySelector("#sideBar");
let sideNavigation = document.querySelector(".sideNavigation");

sideBar.addEventListener("click", function () {
  sideNavigation.classList.toggle("active");
});
