import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavigationProvider from "./contexts/NavigationProvider";
import HomePage from "./pages/home";

import "./App.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </NavigationProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
