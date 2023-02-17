import React from "react";
import { useState, useEffect, createContext } from "react";
import Input from "./input";
import FavItem from "./favItem";
import Information from "./information";
import { getWeather } from "../src/getWeather";
import { useDispatch, useSelector } from "react-redux";

export const MyContext = createContext([]);

const Widget = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

//  const [favorites, setFavorites] = useState(["ТИрасполь", "Бендеры"]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  /*   const addFavoriteItem = (city) => {
    const array = [...favorites, city];
    setFavorites(array);
  };
 */
/*   const delFavoriteItem = (city) => {
    const array = favorites.filter((anyCity) => anyCity !== city);
    setFavorites(array);
  };
 */  
  const addFavoriteItem = (city) => {
    dispatch({type:"addFavorite", payload:city})
  };
  const delFavoriteItem = () => {
    dispatch({type:"delFavorite", payload:city})
  };

    const checkWeather = async (text) => {
    const weather = await getWeather(text);
    setResult(weather);
  };

  return (
    <MyContext.Provider value={favorites}>
      <div className="widget">
        <Input submit={checkWeather} value={props.text} />
        <div className="info">
          <Information
            result={result}
            //          favorites={favorites}
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
                    check={checkWeather}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default Widget;
