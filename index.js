const { createStore } = require("redux");

const initialState = { value: 0 };

const reducer = (state = 0, action) => {
  return state;
};

const store = createStore(reducer);

console.log(store);
