import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "password",
    initialState: {
        password: null
    },
    reducers: {
        login: (state, action) => {
            state.password = action.payload;
        },
        logout: (state) => {
            state.password = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.password.password;

export default userSlice.reducer;