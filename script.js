const decrement = document.getElementById("decrement");
const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
let counterValue = 0;

function update() {
  counter.innerHTML = counterValue;
  // TODO check if reset should be disabled
  // TODO check if correct class to counterValue is applied
}

// TODO create a common function to handle both inc and dec
increment.addEventListener('click', () => {
  counterValue += 1;
  update();
})
decrement.addEventListener('click', () => {
  counterValue -= 1;
  update();
})

update();
