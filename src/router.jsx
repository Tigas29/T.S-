import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FirstContact } from "./pages/firstcontact/index";
import { Portifolio } from "./pages/portifolio/index";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstContact />} />
        <Route path="/home" element={<Portifolio />} />
      </Routes>
    </BrowserRouter>
  );
}
