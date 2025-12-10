let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

let selected = [];

function handleCheckbox(box) {
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

good.addEventListener("change", () => handleCheckbox(good));
cheap.addEventListener("change", () => handleCheckbox(cheap));
fast.addEventListener("change", () => handleCheckbox(fast));
