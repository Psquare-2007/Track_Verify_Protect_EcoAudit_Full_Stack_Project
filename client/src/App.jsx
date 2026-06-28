import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logger from "./pages/Logger";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/logger"
          element={<Logger />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;