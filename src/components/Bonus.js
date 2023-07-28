import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>bonus</h2>
        <p>total points : {points}</p>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
    </div>
  )
}

export default Bonus