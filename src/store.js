import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice";
import quoteReducer from "./quote/quoteSlice";
import bgImageReducer from "./bgImage/bgImageSlice";

export default configureStore({
    reducer: {
        weather: weatherReducer,
        quote: quoteReducer,
        bgImage: bgImageReducer
    }
});