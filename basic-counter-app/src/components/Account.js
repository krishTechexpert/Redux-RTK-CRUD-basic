import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,incrementByAmount,getSingleAccount} from "../slices/accountSlice";


function Account() {
    const amount=useSelector((state) => state.account.amount)
    const points=useSelector((state) => state.bonus.points);
    const dispatch = useDispatch();
    const [inputValue,setInputValue]=useState(5)


  return (
    <div className='account'>
        Account components<hr/>
        my account balance: {amount}

        <div>
        <button onClick={() => dispatch(increment())}>increment by 1</button>
        <button onClick={() => dispatch(decrement())}>decrement by 1</button>
        <input type="number" placeholder='enter amount' value={inputValue} onChange={(event) =>setInputValue(+event.target.value)}/>
        <button onClick={() =>dispatch(incrementByAmount(inputValue))   }>incrementByAmount={inputValue}</button>
        <button onClick={() =>{dispatch(getSingleAccount(2))}}> api by createAsyncThunk </button>

        </div>
     
    </div>
  )
}

export default Account