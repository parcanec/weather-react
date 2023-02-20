import "./App.css";
import { Provider } from "react-redux";
import Widget from "./components/widget.jsx";
import store from "./store/store.js";


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
