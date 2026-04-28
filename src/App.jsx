import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./screens/Home";

function App() {

  return (
    <div className="w-screen h-screen p-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
