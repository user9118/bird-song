import {createSlice} from '@reduxjs/toolkit'


const globalSlice = createSlice({
  name: 'global',
  initialState: { sourse: 0, round: 0, selectedBird: undefined},
  reducers: {
    sourseSet: (state, action) => {
      state.sourse = action.payload
    },
    roundSet: (state, action) => {
      state.round = action.payload
    },
    selectedBirdSet: (state, action) => {
      state.selectedBird = action.payload
    },
  },
})

export const {sourseSet, roundSet, selectedBirdSet} = globalSlice.actions;

export default globalSlice.reducer 