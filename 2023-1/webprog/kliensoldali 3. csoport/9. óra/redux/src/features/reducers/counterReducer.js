import { createAction, createReducer } from "@reduxjs/toolkit"

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")

const initialState = {
 value: 0
}
const counterReducer = createReducer(initialState, (builder)=> {
    builder
    .addCase(increment, (state, action) => {
        state.value += action.payload
    })
    .addCase(decrement, (state, action) => {
        state.value -= action.payload
    });
})
export default counterReducer;