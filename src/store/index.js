import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./AuthSlice"
import counterReducer from "./CounterSlice"



// configure store is like createstore and it allow to merger multiple reducers in toolkit
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
})

export default store










// older approach used to create reducers in react-redux
// const counterReducer = (state = initialState, action)=>{
//     if (action.type === 'increment') {
//         return {
//             counter : state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter : state.counter + action.amount,
//             showCounter: state.showCounter  
//         }
        
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter : state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type ==='toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;

// }