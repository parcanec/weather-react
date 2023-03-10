import React, { useEffect } from "react";
import {selectFavorites, selectWeather} from "../store/selector.js";


const Information = (props) => {
  const favorites = selectFavorites()
  const weather = selectWeather()
  const isResult = !!weather.main
  const iconsUrl = isResult
                    ? `//openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`
                    : "";
  function toHumanDate(timestamp) {
    let time = new Date(timestamp * 1000);
    return time.toLocaleTimeString();
  }

  useEffect(() => {
    const tabs = document.querySelector(".tabs_blocks");
    const tabButton = tabs.querySelectorAll(".tabs_item");
    const contents = tabs.querySelectorAll(".tabs_block");
    tabs.onclick = (e) => {
      const id = e.target.dataset.id;
      if (id) {
        tabButton.forEach((btn) => btn.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));
        e.target.classList.add("active");
        tabs.querySelector("#" + id).classList.add("active");
      }
    };
  }, []);

  return (
    <div className="weather_information">
      <div className="tabs_blocks">
        <div className="tabs_body">
          <div id="tab01" className="tabs_block active">
            <div className="tab_now">
              <div className="temperature">
                {isResult ? Math.round(weather.main.temp) : "---°"}
              </div>
              <div className="weather_icon">
                <img src={iconsUrl} wight="250" height="100" />
              </div>
              <div className="cityFavorite">
                <div className="city">{isResult ? weather.name : "---"}</div>
                <button
                  className="heart"
                  id="favorite_button"
                  type="submit"
                  onClick={() => {
                    const isFav = Boolean(
                      favorites.find((item) => item == weather.name)
                    );
                    isFav ? props.del(weather.name) : props.add(weather.name);
                  }}
                >
                  {" "}
                  &#9825;
                </button>
              </div>
            </div>
          </div>

          <div id="tab02" className="tabs_block">
            <div className="tab_details">
              <div className="city">{isResult ? weather.name : "---"}</div>
              <div>
                <p className="temperatureTab2">
                  Temperature:{" "}
                  {isResult ? Math.round(weather.main.temp) : "---°"}{" "}
                </p>
                <p className="feelsLikeForm2">
                  Feels like:{" "}
                  {isResult ? Math.round(weather.main.feels_like) : "---°"}{" "}
                </p>
                <p className="weatherForm2">
                  Weather: {isResult ? weather.weather[0].main : "---°"}{" "}
                </p>
                <p className="sunriseForm2">
                  Sunrise:{" "}
                  {isResult ? toHumanDate(weather.sys.sunrise) : "---°"}
                </p>
                <p className="sunsetForm2">
                  Sunset: {isResult ? toHumanDate(weather.sys.sunset) : "---°"}
                </p>
              </div>
            </div>
          </div>

          <div id="tab03" className="tabs_block">
            <div className="tab_forecast">
              <div className="tab_details">
                <p>Информация по дням</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="tabs_list">
          <button data-id="tab01" className="tabs_item active">
            Now
          </button>
          <button data-id="tab02" className="tabs_item">
            Details
          </button>
          {/*
          <button data-id="tab03" className="tabs_item">
            Forecast
          </button>
          */}
        </nav>
      </div>
    </div>
  );
};

export default Information;
