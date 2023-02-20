import React from "react";
import Input from "./input";
import FavItem from "./favItem";
import Information from "./information";
import {getWeather} from '../getWeather'
import {useDispatch} from "react-redux";
import {selectFavorites} from "../store/selector.js";

const Widget = (props) => {
    const dispatch = useDispatch();
    const favorites = selectFavorites()
    const addFavoriteItem = (anyCity) => {
        dispatch({type: "addFavorite", payload: anyCity});
    };
    const delFavoriteItem = (anyCity) => {
        dispatch({type: "delFavorite", payload: anyCity});
    };

    const checkWeather = async (text) => {
        const weather = await getWeather(text);
        dispatch({type: "getWeather", payload: weather});
    }

    return (
        <div className="widget">
            <Input submit={checkWeather} value={props.text}/>
            <div className="info">
                <Information
                    add={addFavoriteItem}
                    del={delFavoriteItem}
                />
                <div className="weather_favorite">
                    <div className="favorite_block">
                        <h4>Added Locations:</h4>
                        <ul className="favorite_list">
                            {favorites.map((item) => (
                                <FavItem
                                    key={item}
                                    cityName={item}
                                    del={delFavoriteItem}
                                    check={checkWeather}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;
