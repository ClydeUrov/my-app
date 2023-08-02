import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unsplashApi from "./unsplashApi";

export const getBgImage = createAsyncThunk(
    "image/getImage",
    unsplashApi.getImage
);

export const bgImageSlice = createSlice({
    name: 'bgImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0
    },
    reducers: {
        switchToNextBackgroundImage: (state) => {
            state.currentImageUrlIndex = (state.currentImageUrlIndex + 1) % state.imageUrls.length;
        },
        switchToPreviousBackgroundImage: (state) => {
            let newIndex = state.currentImageUrlIndex - 1
            if (newIndex < 0) {
                newIndex = state.imageUrls.length - 1;
            }
            state.currentImageUrlIndex = newIndex;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBgImage.fulfilled, (state, action) => {
            state.imageUrls = action.payload;
            state.currentImageUrlIndex = 0;
        })
    }
})

export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage} = bgImageSlice.actions;

export default bgImageSlice.reducer;