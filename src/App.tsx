import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationProvider from "./contexts/NavigationProvider";
import HomePage from "./pages/home";

import "./App.scss";

const App = () => {
  return (
    <>
      <NavigationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </NavigationProvider>
    </>
  );
};

export default App;
