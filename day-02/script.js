const sideBarIcon = document.getElementById("sideBarIcon");
const fullSideBar = document.getElementById("fullSideBar");
const halfSideBar = document.getElementById("halfSideBar");
const main = document.getElementById("main");

sideBarIcon.addEventListener("click", () => {
  fullSideBar.classList.toggle("hidden");
  halfSideBar.classList.toggle("hidden");
  main.classList.toggle("resizeMain")
  // main.classList.toggle("max-w-[calc(100%-240px)]")
})