import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import DefaultLayout from "./layout/DefaultLayout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route  element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
