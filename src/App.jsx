import "./App.css";
import { Provider } from "react-redux";
import Widget from "./components/widget.jsx";
import HelpPage from "./components/help.jsx";
import store from "./store/store.js";
import {Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <Provider store={store}>
      <header className="menu">
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </header>
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Widget/>}/>
        <Route path="/help" element={<HelpPage/>}/>
      </Routes>
      </div>
    </Provider>
  );
}

export default App;
