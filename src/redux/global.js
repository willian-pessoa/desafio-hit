import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoged: false,
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLoged = true
    },
    setLogout: () => initialState,
  }
})

export const { setLogin, setLogout } = globalSlice.actions

export default globalSlice.reducer