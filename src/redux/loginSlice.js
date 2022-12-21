import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "authenticated",
    initialState: {
        authenticated: null
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        },
        logout: (state) => {
            state.authenticated = null;
        },
    },
});

export const { setAuthenticated, logout } = userSlice.actions;

export const selectUser = (state) => state.authenticated.authenticated;

export default userSlice.reducer;