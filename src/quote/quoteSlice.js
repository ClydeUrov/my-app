import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import quotesApi from "./quoteApi";

export const getQuote = createAsyncThunk("quote/getQuote", quotesApi.getQuote);

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: "",
        author: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getQuote.fulfilled, (state, action) => {
            state.quote = action.payload.quote;
            state.author = action.payload.author;
        })
    }
})

export default quoteSlice.reducer;