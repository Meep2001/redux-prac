const redux = require('redux');

const reducerFunction = (state = { counter: 0 }, action) => {
    console.log('IN REDUCER FUNCTION');
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(reducerFunction);
const Subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(Subscriber);
store.dispatch({type: 'increment'});




















// const redux = require('redux');

// const reducerFunction = (state = {counter : 0},action) => {
//     return {
//         counter: state.counter + 1,
//     };
// }

// const Subscriber = () => {
//     const state = store.getState();
//     console.log(state);
// }

// const store = redux.createStore(reducerFunction);

// store.subscribe(Subscriber);
// store.dispatch({type:'A'});