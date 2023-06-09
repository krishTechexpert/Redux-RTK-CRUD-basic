import React from 'react';
import {incrementBonus} from "../slices/bonusSlice";
import {useSelector,useDispatch} from 'react-redux';

export function Bonus() {
    const amount=useSelector((state) => state.account.amount)
    const points=useSelector((state) => state.bonus.points);
    const dispatch = useDispatch();
  return (
    <div className='account'>
    Bonus components<hr/> 
    my Points: {points}

    <div>
     <button onClick={() => dispatch(incrementBonus())}>increment points</button>
    </div>

</div>
  )
}

