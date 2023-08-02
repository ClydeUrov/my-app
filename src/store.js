import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice";
import quoteReducer from "./quote/quoteSlice";

export default configureStore({
    reducer: {
        weather: weatherReducer,
        quote: quoteReducer
    }
});