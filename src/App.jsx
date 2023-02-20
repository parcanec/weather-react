import "./App.css";
import Widget from "../components/widget.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

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

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Widget />
      </div>
    </Provider>
  );
}

export default App;
