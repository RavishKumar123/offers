import React, { Suspense, lazy } from "react";
import "./App.css";
import "./custom-bootstrap.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import { Loader } from "./components";
import ErrorBoundary from "./ErrorBoundry";
const Offers = lazy(() => import("./screens/Offers"));
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader message="Loading Component" />}>
          <Routes>
            <Route path="/" element={<Offers />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
