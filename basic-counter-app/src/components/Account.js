import React,{useState} from 'react';
import {incrementFN,decrementFN,incrementByAmountFN,getUserSuccessFN,getUserRejectedFN,getUserPendingFN} from "../actions";
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';


function Account() {
    const amount=useSelector((state) => state.account.amount)
    const points=useSelector((state) => state.bonus.points);
    const dispatch = useDispatch();
    const [inputValue,setInputValue]=useState(5)

    function getSingleAccount(id){
      return async (dispatch) => {
          try{
              dispatch(getUserPendingFN())
              
              const {data} = await axios.get(`http://localhost:3005/account/${id}`);
              dispatch(getUserSuccessFN(data.amount))
          }catch(error){
              dispatch(getUserRejectedFN(error.message))
          }
          
      }
  
  }
  return (
    <div className='account'>
        Account components<hr/>
        my account balance: {amount}

        <div>
        <button onClick={() => dispatch(incrementFN())}>increment by 1</button>
        <button onClick={() => dispatch(decrementFN())}>decrement by 1</button>
        <input type="number" placeholder='enter amount' value={inputValue} onChange={(event) =>setInputValue(+event.target.value)}/>
        <button onClick={() =>dispatch(incrementByAmountFN(inputValue))   }>incrementByAmount={inputValue}</button>
        <button onClick={() =>{dispatch(getSingleAccount(2))}}>axios api</button>

        </div>
     
    </div>
  )
}

export default Account