// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         increment: state => {
//             state.value++
//         }, 
//         decrement: state => {
//             state.value--
//         }
//     }
// })

// export const { increment, decrement } = counterSlice.actions

// export const store = configureStore({
//     reducer: counterSlice.reducer
// })

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(increment())

// store.dispatch(increment())

// store.dispatch(decrement())

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => { state.value++ },
        decrement: state => { state.value-- }
    }
});

export type RootState = ReturnType<typeof store.getState>

export const { increment, decrement } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;