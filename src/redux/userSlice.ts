import { AsyncThunkAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  name: string;
  email: string;
  // Other properties
}
interface UserState {
  userInfo: User;
  isLoading: boolean;
  error: boolean;
}

export const updateUser2 = createAsyncThunk(
  '/users/update',
  async (user) => {
    const res = await axios.post('http://localhost:8080/api/users/1/update', user);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Ameer Hamza",
      email: "ameer.hamza@email.com",
    },
    isLoading: false,
    error: false
  } as UserState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    update: (state, action) => {
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => (state = { name: "", email: "" }),
    // addHelloToName: (state, action) => {
    //   state.name = "Hello " + action.payload.name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser2.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(updateUser2.fulfilled, (state, action: PayloadAction<User>) => {
        state.userInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser2.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
  // extraReducers: {
  //   [updateUser2.pending.type]: (state) => {
  //     state.isLoading = true;
  //     state.error = false;
  //   },
  //   [updateUser2.fulfilled.type]: (state, action) => {
  //     state.userInfo = action.payload;
  //     state.isLoading = false;
  //   },
  //   [updateUser2.rejected.type]: (state) => {
  //     state.error = true;
  //     state.isLoading = false;
  //   }
  // },
});

// export const { update, remove, addHelloToName } = userSlice.actions;
export const { update, isLoading, setError } = userSlice.actions;

export default userSlice.reducer;
