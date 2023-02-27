import "./App.css";
import { Provider } from "react-redux";
import Widget from "./components/widget.jsx";
import store from "./store/store.js";
import {Routes, Route, Link } from "react-router-dom"
import {HelpPage} from "./components/help.jsx"


function App() {
  return (
    <Provider store={store}>
      <header>
        <Link to="/help">Help</Link>
      </header>
      <div className="wrapper">
        <Widget />
      </div>
      <Routes>
        <Route path="/help" element={<HelpPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
