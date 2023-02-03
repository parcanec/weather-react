import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return (
    <div class="wrapper">
      <div class="widget">
        <form class="input_div">
          <input id='search' placeholder="Enter needed city" type="text" value='tiraspol'/>
          <button id='search_button' type="submit">&#128269;</button>
        </form>
        
        <div class="info">
          <div class="weather_information">
            <div class="tabs_blocks">
              <div class="tabs_body">
                <div id="tab01" class="tabs_block active">
                  <div class="tab_now">
                    <div class='temperature'>---°</div>
                    <div class='weather_icon'></div>
                    <div class="cityFavorite">
                      <div class='city'>---</div>
                      <button id='favorite_button' type="submit">&#9825;</button>
                    </div>
                  </div>
                </div>
                
                <div id="tab02" class="tabs_block">
                  <div class="tab_details">
                    <div class='city'>---</div>
                    <div>
                      <p class='temperatureTab2'>Temperature: ---°</p>
                      <p class='feelsLikeForm2'>Feels like: ---°</p>
                      <p class='weatherForm2'>Weather: ---°</p>
                      <p class='sunriseForm2'>Sunrise: ---°</p>
                      <p class='sunsetForm2'>Sunset: ---°</p>
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
                <button data-id="tab01" class="tabs_item active">Now</button>
                <button data-id="tab02" class="tabs_item">Details</button>
                <button data-id="tab03" class="tabs_item">Forecast</button>
              </nav>
            </div>
          </div>
          
          <div class="weather_favorite">
            <div class="favorite_block">
              <h4>Added Locations:</h4>
              <ul class="favorite_list"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App