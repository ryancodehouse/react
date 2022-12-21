import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../redux/loginSlice";

export default configureStore({
    reducer: {
        password: useReducer,
    }
})