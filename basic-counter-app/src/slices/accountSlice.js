import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSingleAccount = createAsyncThunk('account/getUser',async (id) => {
        const {data} = await axios.get(`http://localhost:3005/account/${id}`);
        return data.amount

        // here below no need to handle with try catch if you used it then rejected not work by thunk
    // try{
    //     const {data} = await axios.get(`http://localhost:3005/account123/${id}`);
    //     return data.amount
    // }catch(error){
    //     console.log("error=",error.message)
    //     return error.message
    // }
    
})


export const accountSlice = createSlice({
    name:'account',
    initialState: {
        amount: 0
    },
    reducers:{
        increment: state => {
            state.amount += 1
        },
        decrement: state => {
            if(state.amount <= 0) {
                state.amount=0
            }else{
                state.amount -= 1
            }
        
        },
        incrementByAmount: (state, action) => {
        state.amount += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSingleAccount.pending, (state, action) => { 
            state.pending=true;
        })
        .addCase(getSingleAccount.rejected, (state, action) => {  
            state.error = action.error.message
            state.pending=false;
        })
        .addCase(getSingleAccount.fulfilled, (state, action) => { // action k andar api response  amount aa reha hai 
            state.amount+= action.payload
            state.pending=false;
        })
        
        
        
    }
})

export const {increment,decrement,incrementByAmount}=accountSlice.actions;
export default accountSlice.reducer;