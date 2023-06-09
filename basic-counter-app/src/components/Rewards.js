import React from 'react';
import { increment ,incrementByAmount} from '../reducers/rewards';
import {useSelector,useDispatch} from 'react-redux';

export function Rewards() {
    const amount=useSelector((state) => state.account.amount)
     const points=useSelector((state) => state.rewards.points);
    const dispatch = useDispatch();
  return (
    <div className='account'>
    Rewards components<hr/> 
    My Rewards points: {points}

    <div>
     <button onClick={() => dispatch(increment())}>increment Rewards points</button>
     <button onClick={() => dispatch(incrementByAmount(6))}>incrementBy6 Rewards points</button>
    </div>

</div>
  )
}

