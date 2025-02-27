import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure this is from "react-router-dom"

import { AppLayout } from "@/components/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={"/"} index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
