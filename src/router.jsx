import Loading from "./components/loading.js";
import React, { lazy, Suspense } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
const Links = lazy(() => import("./pages/Linktree/index"));
const Portifolio = lazy(() => import("./pages/portifolio/index"));
const FirstContact = lazy(() => import("./pages/firstcontact/index"));
const Space = lazy(() => import("./pages/workspace"));
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/main" element={<Portifolio />} />
          {/* <Route path="/workspace" element={<Space />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
