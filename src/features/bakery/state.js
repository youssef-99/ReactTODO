import { createSlice } from "@reduxjs/toolkit";

const cakeState = {
  numberOfCakes: 20,
};

export const cakeSlice = createSlice({
  name: "Cake",
  initialState: cakeState,
  reducers: {
    orderCake: (state) => {
      state.numberOfCakes -= 1;
    },
    restockCake: (state) => {
      state.numberOfCakes += 1;
    },
  },
});
