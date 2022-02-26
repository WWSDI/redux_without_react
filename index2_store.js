const {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} = require("redux");

const initialState = { value: 0 };

// the type property is actually the only thing required to be in the Action object
// other possible props (flux pattern) include payload, meta, error etc.
const INCREMENT = 'INCREMENT'
const ADD = "ADD"

const incrementAction = { type: INCREMENT };
const increment = () => incrementAction
const add = (amount) => ({ type: ADD, payload: amount })

// ⭐️ Reducer is simply a pure function that takes two arguments: current state, action, then outputs a new state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case ADD:
      return { value: state.value + action.payload }
    default:
      return state
  }
};

// There is a optional second argument of StoreEnhancer<any, any> type
const store = createStore(reducer)
/* store has the following props: 
{
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState], 
  replaceReducer: [Function: replaceReducer], // for code splitting 
  '@@observable': [Function: observable]
} 
*/

// subscriber is just a callback that gets called everytime store chagnes
const subscriber = () => { console.log('SUBSCRIBER', store.getState()) }
store.subscribe(subscriber)

// Start quokka on this file to see log
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(add(5));


// ⭐️ Bind individual action creators
// The output, actions, is an object with the same keys, but with every action creator function wrapped into a dispatch call so they may be invoked directly.
const actions = bindActionCreators({ increment, add }, store.dispatch)
actions.add(100)
actions.increment()



console.log(store);