import Loading from "./components/loading.js";
import React, { lazy, Suspense } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
const Portifolio = lazy(() => import("./pages/portifolio/index"));
const FirstContact = lazy(() => import("./pages/firstcontact/index"));
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstContact />} />
          <Route path="/home" element={<Portifolio />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
