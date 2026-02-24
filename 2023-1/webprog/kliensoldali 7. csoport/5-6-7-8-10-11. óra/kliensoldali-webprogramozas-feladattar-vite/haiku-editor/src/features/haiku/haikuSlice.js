import { createSlice } from "@reduxjs/toolkit"

const initialState = 
{
    editor: "",
    selectedIndex: null,
    haikus: [
        `Téged vártalak
    Mint hajnali fényt éjjel
    Félve-remélve`,
    ],
}

const haikuSlice = createSlice({
    name: "haikus",
    initialState,
    reducers: {
        changeText: (state, { payload: haikuText }) => {
            state.editor = haikuText
        },
        addText: (state) => {
            state.haikus.push(state.editor)
        },
    }
})

export const haikuReducer = haikuSlice.reducer

export const { changeText, addText } = haikuSlice.actions

export const selectEditor = (state) => state.haikus.editor

export const selectHaikus = (state) => (
    console.log(state.haikus)
);