import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
        <MyNavbar />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
