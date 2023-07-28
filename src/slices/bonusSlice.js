import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
const incInAmount = createAction("account/incrementByAmount");

const initialState = {
  // points ->state
  points: 1,
};
/* 
to setup the logic whenever amount is incremented over 100 increment points by 1 using extraReducers
step 1: createAction()
step 2: extraReducers: callback
*/
export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incInAmount, (state, action) => {
      if (action.payload >= 100) state.points += 1;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
