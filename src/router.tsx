import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultLayout from "./layout/DefaultLayout";
import Recipes from "./pages/Recipes/Recipes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route  element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
