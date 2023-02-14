import React from "react"
import { useState, useEffect } from "react"
import Input from "./input"
import FavItem from "./favItem"
import Information from "./information"
import { getWeather } from "../src/getWeather"

const Widget = (props) => {
    const [favorites, setFavorites] = useState(['Tiraspol', 'Paris'])
    const [result, setResult] = useState(null)
    
    useEffect(()=>{
        console.log(favorites)
    },[favorites])
    const addFavoriteItem = (city)=> {
        const array = [...favorites, city]
        setFavorites(array)
    }
    const delFavoriteItem = (city)=> {
        const array = favorites.filter(anyCity => anyCity !== city)
        setFavorites(array)
    }
    const checkWeather = async (text) => {
        const weather = await getWeather(text)
        setResult(weather)
    }

  return (
    <div className="widget">
      <Input submit={checkWeather} value={props.text} />
      
      <div className="info">
        <Information result={result}/>

        <div className="weather_favorite">
          <div className="favorite_block">
            <h4>Added Locations:</h4>
            <ul className="favorite_list">
                {
                    favorites.map((item)=> <FavItem 
                    cityName={item}
                    del={delFavoriteItem}
                    check={checkWeather}/>)
                }
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Widget