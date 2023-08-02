import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBgImage } from "./bgImageSlice";

const BackgroundImage = () => {
    const { imageUrls, currentImageUrlIndex } = useSelector((state) => state.bgImage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBgImage());
    }, [dispatch]);

    return (
        <div id="background-image-container">
            <img src={imageUrls[currentImageUrlIndex]} alt="" id="background-image" />
        </div>
    );
};

export default BackgroundImage;