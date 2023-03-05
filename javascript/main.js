let bars = document.getElementById("bars");
let nav = document.getElementById("nav");

if ((nav.style.display = "none")) {
  function show() {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.width = "100%";
    nav.style.left = "0";
    nav.style.padding = "25px";
    nav.style.backgroundColor = "rgba(0, 0, 0, 50%)";
  }
} else {
  function show() {
    nav.style.display = "none";
  }
}
