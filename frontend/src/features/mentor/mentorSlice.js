import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mentorService from "./mentorService";

// Initial State
const initialState = {
    mentors: [],
    selectedCountry: "",  // ✅ Only filtering by country
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};

// Fetch mentors by country (JSON request)
export const fetchMentorsByCountry = createAsyncThunk(
    "mentors/fetchMentorsByCountry",
    async (country, thunkAPI) => {
        try {
            return await mentorService.fetchMentorsByCountry({ country });
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const mentorSlice = createSlice({
    name: "mentors",
    initialState,
    reducers: {
        setCountry: (state, action) => {
            state.selectedCountry = action.payload;
        },
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMentorsByCountry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMentorsByCountry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.mentors = action.payload;
            })
            .addCase(fetchMentorsByCountry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { setCountry, reset } = mentorSlice.actions;
export default mentorSlice.reducer;
