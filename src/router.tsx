import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultLayout from "./layout/DefaultLayout";
import Recipes from "./pages/Recipes/Recipes";
import RecipesFiltered from "./pages/RecipesFiltered/RecipesFiltered";
import RecipeDetails from "./pages/RecipeDetails/ReceipeDetails";
import Favorites from "./pages/Favorites/Favorites";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route  element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:search" element={<RecipesFiltered />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
