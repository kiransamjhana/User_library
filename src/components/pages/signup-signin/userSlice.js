import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = userslice;
export const { setUser } = actions;
export default reducer;
