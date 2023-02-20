import {useSelector} from "react-redux";

export const selectWeather = () => useSelector((state) => state.weather);
export const selectFavorites = () => useSelector((state) => state.favorites);