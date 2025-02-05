import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import mentorReducer from  "../features/mentor/mentorSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        mentor: mentorReducer
    },
})