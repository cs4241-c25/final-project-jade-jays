import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure this is from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} index element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
