let pallet_colors_show = false;
function show_pallet_colors() {
  let pallet_colors = document.getElementById("pallet_colors");

  pallet_colors_show = !pallet_colors_show;

  pallet_colors.style.opacity = pallet_colors_show ? "1" : "0";
}

function change_color(id) {
  let body = document.body;

  if (id === "gold_color") {
    body.removeAttribute("class");
  } else if (id === "white_color") {
    body.className = "white";
  }
}

let nav = document.getElementById("nav");
let down = document.getElementById("down");
let up = document.getElementById("up");
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

// window.addEventListener("contextmenu", function (n) {
//   n.preventDefault();
// });

// window.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.key === "s") {
//     e.preventDefault();
//   }
// });

// window.addEventListener("keydown", function (o) {
//   if (o.ctrlKey && o.key === "u") {
//     o.preventDefault();
//   }
// });

// window.addEventListener("keydown", function (x) {
//   if (x.keyCode == 123) {
//     x.preventDefault();
//   }
// });
