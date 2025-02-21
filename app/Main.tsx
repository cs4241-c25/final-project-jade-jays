import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/Main.css";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TrackSheet from "./components/TrackSheet";
import Redirect from "./components/Redirect";
import {rootPath, trackPath, flowPath, makePath} from "./components/Paths";
import FlowChart from "./components/FlowChart";
import Maker from "./components/Maker";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path={rootPath} index element={<Login />} />
        <Route path={trackPath} element={<TrackSheet />} />
          <Route path={flowPath} element={<FlowChart />} />
          <Route path={makePath} element={<Maker />} />
        <Route path="*"  element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
