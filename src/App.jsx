import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./screens/Home";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
