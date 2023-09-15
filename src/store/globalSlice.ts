import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
  sourse: number, round: number, rightBird: number, selectedBird: any, roundWin: boolean
}
const initialState:InitialState = { sourse: 0, round: 0, rightBird: 0, selectedBird: {} , roundWin: false}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    sourseSet: (state, action: PayloadAction<number>) => {
      state.sourse = action.payload
    },
    roundSet: (state, action: PayloadAction<number>) => {
      state.round = action.payload
    },
    rightBirdSet: (state, action: PayloadAction<number>) => {
      state.rightBird = action.payload
    },
    selectedBirdSet: (state, action: PayloadAction<any>) => {
      state.selectedBird = action.payload
    },
    roundWinSet: (state, action: PayloadAction<boolean>) => {
      state.roundWin = action.payload
    },
  },
})

export const {sourseSet, roundSet, rightBirdSet, selectedBirdSet, roundWinSet} = globalSlice.actions;

export default globalSlice.reducer 