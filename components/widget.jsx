import React, { useState } from "react";
import Input from "./input";
import FavItem from "./favItem";
import Information from "./information";
import {getWeather} from '../src/getWeather'
import { useDispatch, useSelector } from "react-redux";

const Widget = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const weather = useSelector((state) => state.weather);

  const addFavoriteItem = (anyCity) => {
    dispatch({ type: "addFavorite", payload: anyCity });
  };
  const delFavoriteItem = (anyCity) => {
    dispatch({ type: "delFavorite", payload: anyCity });
  };

  const getWeather = async (text) => {
    const weather = await getWeather(text);
    dispatch({type: "getWeather", payload: weather});
  }

  return (
    <div className="widget">
      <Input submit={getWeather} value={props.text} />
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
                  cityName={item}
                  del={delFavoriteItem}
                  check={getWeather}
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
