import React from "react"
import { useState, useEffect } from "react"
import Input from "./input"
import FavItem from "./favItem"
import { getWeather } from "../src/getWeather"

const Widget = (props) => {
    const [favorites, setFavorites] = useState(['Tiraspol', 'Paris'])
    const [result, setResult] = useState()

    const addFavoriteItem = (city)=> {
        const array = [...favorites, city]
        setFavorites(array)
    }
    const delFavoriteItem = (city)=> {
        const array = favorites.filter(anyCity => anyCity !== city)
        setFavorites(array)
        console.log(city)
    }

    const checkWeather = (text) => {
        setResult(getWeather('Tiraspol'))
        console.log(result)
    }

  return (
    <div className="widget">
      <Input submit={checkWeather} value={props.text} />
      
      <div class="info">
        <div class="weather_information">
          <div class="tabs_blocks">
            <div class="tabs_body">
              <div id="tab01" class="tabs_block active">
                <div class="tab_now">
                  <div class="temperature">---°</div>
                  <div class="weather_icon"></div>
                  <div class="cityFavorite">
                    <div class="city">---</div>
                    <button id="favorite_button" type="submit">
                      &#9825;
                    </button>
                  </div>
                </div>
              </div>

              <div id="tab02" class="tabs_block">
                <div class="tab_details">
                  <div class="city">---</div>
                  <div>
                    <p class="temperatureTab2">Temperature: ---°</p>
                    <p class="feelsLikeForm2">Feels like: ---°</p>
                    <p class="weatherForm2">Weather: ---°</p>
                    <p class="sunriseForm2">Sunrise: ---°</p>
                    <p class="sunsetForm2">Sunset: ---°</p>
                  </div>
                </div>
              </div>

              <div id="tab03" class="tabs_block">
                <div class="tab_forecast">
                  <div class="tab_details">
                    <p>Информация по дням</p>
                  </div>
                </div>
              </div>
            </div>

            <nav class="tabs_list">
              <button data-id="tab01" class="tabs_item active">
                Now
              </button>
              <button data-id="tab02" class="tabs_item">
                Details
              </button>
              <button data-id="tab03" class="tabs_item">
                Forecast
              </button>
            </nav>
          </div>
        </div>

        <div class="weather_favorite">
          <div class="favorite_block">
            <h4>Added Locations:</h4>
            <ul class="favorite_list">
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