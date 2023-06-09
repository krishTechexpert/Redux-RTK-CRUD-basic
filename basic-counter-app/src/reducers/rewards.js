import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmt')


const initialState = { points: 20}

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    }) 
    .addCase(incrementByAmount,(state,action) => {
        state.points += action.payload
    }) 
   
})
export default rewardReducer;