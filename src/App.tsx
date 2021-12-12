import React from "react";
import logo from "./logo.svg";
import { Offers } from "./screens/Offers";
import "./App.css";
import './custom-bootstrap.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Offers />}/>
  </Routes>
</BrowserRouter>;
}

export default App;
