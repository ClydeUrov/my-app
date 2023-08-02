import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./weatherSlice";

const Weather = () => {
    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    const { metadata, temperature, city, state } = useSelector(
        (state) => state.weather
    );
    const dispatch = useDispatch();
    console.log(metadata, temperature, city, state)

    useEffect(() => {
        dispatch(getWeather({ city, state }));
    }, [dispatch, city, state]);

    return (
        <div className="weather bg-secondary">
        <div className="temperature-container">
            <h3>{city}, {state}</h3>
            <img
                src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
                alt=""
            />
            <div className="weather-text">
            <p className="temperature">{temperature}°</p>
            <p className="weather-description">{metadata.description}</p>
            </div>
        </div>
        </div>
    );
};

export default Weather;