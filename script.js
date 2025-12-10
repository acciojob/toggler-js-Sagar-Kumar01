let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

let g1 = document.getElementById("g1");
let g2 = document.getElementById("g2");
let g3 = document.getElementById("g3");

let selected = [];

function toggleCheckbox(box) {
  box.checked = !box.checked;

  if (box.checked) {
    if (selected.length < 2) {
      selected.push(box);
    } else {
      selected[0].checked = false;
      selected.shift();
      selected.push(box);
    }
  } else {
    selected = selected.filter(item => item !== box);
  }
}


g1.addEventListener("click", () => toggleCheckbox(good));
g2.addEventListener("click", () => toggleCheckbox(cheap));
g3.addEventListener("click", () => toggleCheckbox(fast));
