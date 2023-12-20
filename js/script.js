let text = document.querySelector(".text");
let info = text.innerHTML;

text.innerHTML = "";
let count = 0;

function typeJs() {
  text.innerHTML += info.charAt(count);
  count++;
  if (count == info.length+1) {
    text.innerHTML = "";
    count = 0;
  }
}

let stop = setInterval(() => {
  typeJs();
}, 100);
