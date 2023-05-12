

const counter = document.getElementById("title");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  
});

resetBtn.addEventListener('click', ()=> {
      count=0;
     counter.textContent = 0;
})


