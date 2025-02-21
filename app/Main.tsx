import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, RedirectFunction } from "react-router";
import "@/Main.css";

import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import App from "./components/App";
import Redirect from "./components/Redirect";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
      <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="*"  element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
