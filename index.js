const redux = require('redux');
//console.log(redux);

//Reducer
const initState = {
    num: 0
}
const Reducer = (state = initState, action) => {

    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }

    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    return state;
}
//Store

const store = redux.createStore(Reducer);
console.log(store.getState());

//Subscribe
store.subscribe(() => {
    console.log("Subscribe ", store.getState());
})
//Dispatching

store.dispatch({
    type: 'INC_NUM'
});

store.dispatch({
    type: 'ADD_NUM',
    value: 35
});
console.log(store.getState());


