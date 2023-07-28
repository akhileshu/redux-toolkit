import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import action these are named exports
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../slices/accountSlice";

function Account() {
  const [value, setValue] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Account</h2>
      <p>Amount : {amount}</p>
      {/* for ex when we call this, dispatch(incrementByAmount({ key: 9, value: 4 }))
      in background a action object is create with type and payload ,
      type is handled in background ,just we need tod pass payload as argument ,
      as payload we can send anything which is essential for state change

       {type: 'account/incrementByAmount', payload: {…}}
            payload: {key: 9, value: 4}
            type:"account/incrementByAmount"
       */}
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="number"
        placeholder={value}
      />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by {value}
      </button>
      <button onClick={() => dispatch(getUserAccount(1))}>
        getUser{/*account/getUser/fulfilled*/}
      </button>
    </div>
  );
}

export default Account;
