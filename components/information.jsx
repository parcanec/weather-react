import React, { useEffect } from "react";

const Information = (props) => {
  const isResult = props.result;
  const iconsUrl = isResult
    ? `//openweathermap.org/img/wn/${isResult.weather[0].icon}@2x.png`
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
                {isResult ? Math.round(isResult.main.temp) : "---°"}
              </div>
              <div className="weather_icon">
                <img src={iconsUrl} wight="250" height="100" />
              </div>
              <div className="cityFavorite">
                <div className="city">{isResult ? isResult.name : "---"}</div>
                <button
                  className="heart"
                  id="favorite_button"
                  type="submit"
                  onClick={() => {
                    const isFav = Boolean(
                      isResult.find((item) => item == isResult.name)
                    );
                    isFav ? props.del(isResult.name) : props.add(isResult.name);
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
              <div className="city">{isResult ? isResult.name : "---"}</div>
              <div>
                <p className="temperatureTab2">
                  Temperature:{" "}
                  {isResult ? Math.round(isResult.main.temp) : "---°"}{" "}
                </p>
                <p className="feelsLikeForm2">
                  Feels like:{" "}
                  {isResult ? Math.round(isResult.main.feels_like) : "---°"}{" "}
                </p>
                <p className="weatherForm2">
                  Weather: {isResult ? isResult.weather[0].main : "---°"}{" "}
                </p>
                <p className="sunriseForm2">
                  Sunrise:{" "}
                  {isResult ? toHumanDate(isResult.sys.sunrise) : "---°"}
                </p>
                <p className="sunsetForm2">
                  Sunset: {isResult ? toHumanDate(isResult.sys.sunset) : "---°"}
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
