import {createSlice} from '@reduxjs/toolkit'


const globalSlice = createSlice({
  name: 'global',
  initialState: { sourse: 0, round: 0, rightBird: 0, selectedBird: undefined, roundWin: false},
  reducers: {
    sourseSet: (state, action) => {
      state.sourse = action.payload
    },
    roundSet: (state, action) => {
      state.round = action.payload
    },
    rightBirdSet: (state, action) => {
      state.rightBird = action.payload
    },
    selectedBirdSet: (state, action) => {
      state.selectedBird = action.payload
    },
    roundWinSet: (state, action) => {
      state.roundWin = action.payload
    },
  },
})

export const {sourseSet, roundSet, rightBirdSet, selectedBirdSet, roundWinSet} = globalSlice.actions;

export default globalSlice.reducer 