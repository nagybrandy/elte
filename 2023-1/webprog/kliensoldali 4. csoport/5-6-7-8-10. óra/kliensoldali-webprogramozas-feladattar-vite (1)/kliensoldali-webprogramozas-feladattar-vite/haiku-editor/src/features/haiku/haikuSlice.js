import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
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
    reducers : {
        changeText: (state, {payload : haikuText}) => {
            state.editor = haikuText
        },
        addHaiku: (state) => {
            state.haikus.push(state.editor)
        },
        selectHaiku: (state, {payload : haikuid}) => {
            state.selectedIndex = haikuid
            state.editor = state.haikus[haikuid]
        },
        editHaiku: (state) => {
            state.haikus[state.selectedIndex] = state.editor
            state.editor = ""
            state.selectedIndex = null
        },
        removeHaiku: (state) => {
            state.haikus = [...state.haikus.slice(0,state.selectedIndex), ...state.haikus.slice(state.selectedIndex+1)]
            state.editor = ""
            state.selectedIndex = null
        }
    }
})

// actions
export const { changeText, addHaiku,selectHaiku, editHaiku,removeHaiku } = haikuSlice.actions

// selectors
export const selectEditor = (state) => {
    const v = "aeuioöüóőúáűé"
    const vowels = state.editor.split("\n").map(e => [...e].filter(e => v.includes(e)).length)
    const pelda = [5,7,5]
    return {
        text: state.editor,
        isHaiku: _.isEqual(pelda, vowels),
        vowels
    }
}
export const selectHaikus = (state) => state.haikus
export const selectEdited = (state) => state.selectedIndex

export default haikuSlice.reducer 
