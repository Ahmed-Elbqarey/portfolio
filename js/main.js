let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.getElementById("body");
 let nav = document.getElementById("nav");
let down = document.getElementById("down");
let up = document.getElementById("up");
let logo = document.getElementById("logo");
function mode(id) {
  if (id == "moon") {
    moon.style.display = "none";
    sun.style.display = "block";
    body.removeAttribute("class");
    logo.innerHTML = `<img src="images/logo.png">`;
  } else {
    body.classList.add("class", "test");
    moon.style.display = "block";
    sun.style.display = "none";
    logo.innerHTML = `<img src="images/dark-logo.png">`;
  }
}

function showP(id) {
  if (id == "show") {
    document.querySelector(".services-container").style.visibility = "visible";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector(".services-container").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "auto";
  }
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1000) {
    down.style.display = "none";
    up.style.display = "inline-block";
  } else {
    down.style.display = "inline-block";
    up.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.style.bottom = "0";
  } else {
    nav.style.bottom = "-100px";
  }
});

window.addEventListener("contextmenu", function (n) {
  n.preventDefault();
});

window.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
  }
});

window.addEventListener("keydown", function (o) {
   if (o.ctrlKey && o.key === "u") {
    o.preventDefault();
  }
});


window.addEventListener("keydown", function (x) {
  if (x.keyCode == 123) {
    x.preventDefault();
  } 
});

