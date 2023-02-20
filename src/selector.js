import { useSelector } from "react-redux";

export const weather = useSelector((state) => state.weather);
export const favorites = useSelector((state) => state.favorites);