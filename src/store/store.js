import {createStore} from "redux";

const initialState = {
    favorites: ["Tiraspol"],
    weather: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addFavorite":
            const addState = {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
            return addState;
        case "delFavorite":
            const delState = {
                ...state,
                favorites: [
                    ...state.favorites.filter((anyCity) => anyCity !== action.payload)],
            };
            return delState;
        case "getWeather":
            const setWeather = {
                ...state,
                weather: action.payload,
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store