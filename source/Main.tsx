import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./Main.css";

import AppLayout from "./components/AppLayout"

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
