import { createSlice,createAction } from '@reduxjs/toolkit';

const INCbyAmt = createAction('account/incrementByAmount')

export const bonusSlice = createSlice({
    name:'bonus',
    initialState: {
        points: 0
    },
    reducers:{
        incrementBonus: state => {
            state.points += 1
        }
    },
    extraReducers:(builder) => {
        builder.addCase(INCbyAmt,(state, action) => {
            if(action.payload>=100){
                state.points += 1
            }
        
        })
    }
})

export const {incrementBonus}=bonusSlice.actions;
export default bonusSlice.reducer;