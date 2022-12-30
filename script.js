(() => {
  const decrement = document.getElementById("decrement");
  const counter = document.getElementById("counter");
  const increment = document.getElementById("increment");
  const reset = document.getElementById("reset");
  const INITIAL_COUNTER_VALUE = 0;
  let counterValue = INITIAL_COUNTER_VALUE;

  function disableCounterIfInitialValue(isInitialValue) {
    isInitialValue
      ? reset.setAttribute("disabled", true)
      : reset.removeAttribute("disabled");
  }

  function applyCorrectClass(isInitialValue) {
    if (isInitialValue) {
      counter.removeAttribute("class");
    } else {
      counter.className = counterValue > 0 ? "success" : "failure";
    }
  }

  function update() {
    const isInitialValue = counterValue === INITIAL_COUNTER_VALUE;
    disableCounterIfInitialValue(isInitialValue);
    applyCorrectClass(isInitialValue);
    counter.innerHTML = counterValue;
  }

  function act(shouldIncrement) {
    if (shouldIncrement) {
      counterValue += 1;
    } else {
      counterValue -= 1;
    }
    update();
  }

  function resetCounter() {
    counterValue = INITIAL_COUNTER_VALUE;
    update();
  }

  increment.addEventListener("click", () => act(true));
  decrement.addEventListener("click", () => act(false));
  reset.addEventListener("click", resetCounter);

  update();
})();
