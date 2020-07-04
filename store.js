const valueEl = document.getElementById("value");

const counter = (state, action) => {
  if (typeof state === "undefined") return 0;
  console.log("Previous state", state);
  console.log("Action type", action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = Redux.createStore(counter);

render = () => {
  const currentState = store.getState();
  console.log("current state:", currentState);
  valueEl.innerHTML = currentState.toString();
};
// setup an click event on #increment when the click is trigger tell the store please dispatch increment action
document.getElementById("increment").addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});
document.getElementById("decrement").addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
});
document.getElementById("incrementIfOdd").addEventListener("click", () => {
    if (store.getState() % 2 !== 0) {
        store.dispatch({ type: "INCREMENT" });
    }
});
document.getElementById("incrementAsync").addEventListener("click", () => {
    setTimeout(() => {
        store.dispatch({ type: "INCREMENT" });
    }, 1000);
});

render();
// render will subscribe the store whenever the store change, it will notify for render
store.subscribe(render);
