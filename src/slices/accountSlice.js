import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
// First, create the thunk
// getUserAccount(userId)
export const getUserAccount = createAsyncThunk(
  'account/getUser',//-> action type
  async (userId, thunkAPI) => {
    const response = await axios.get(`http://localhost:8000/accounts/${userId}`)
    return response.data.amount
  }
)
const initialState = {
    // amount ->state 
  amount: 1,
}

export const accountSlice = createSlice({
  name: 'account',//we need to use these name in store to access this state ->amount
  initialState,
//   state update logic in reducers
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += Number(action.payload)
    //   console.log(action)
    },
  },
  extraReducers: (builder) => {
    // used along with createAsyncThunk()
      // (name,callback)
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      // Add user to the state array
      state.amount=action.payload;
      state.pending=false
    })
    .addCase(getUserAccount.pending, (state, action) => {
      state.pending=true
    })
    .addCase(getUserAccount.rejected, (state, action) => {
      state.error=action.error
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

// export reducer
export default accountSlice.reducer