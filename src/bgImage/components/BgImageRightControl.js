import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextBackgroundImage } from "../bgImageSlice";

const BgImageRightControl = () => {
    const dispatch = useDispatch();

    return (
        <button
            aria-label="Switch to next wallpaper"
            onClick={() => {dispatch(switchToNextBackgroundImage())}}
        >
            {'>'}
        </button>
    )
}

export default BgImageRightControl;