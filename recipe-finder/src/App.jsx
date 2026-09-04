import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchRecipes = async () => {
    if (!search.trim()) {
      setError("Please enter a recipe name");
      return;
    }

    setLoading(true);
    setError("");
    setSelectedRecipe(null);

    try {
      const response = await fetch(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
);

      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🍳 Recipe Finder</h1>

      <p>Find delicious recipes for your next meal!</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchRecipes}>Search</button>
      </div>

      {loading && <p>Loading recipes...</p>}

      {error && <p>{error}</p>}

      {/* Recipe Details */}
      {selectedRecipe && (
        <div className="recipe-details">
          <button onClick={() => setSelectedRecipe(null)}>
            ← Back to Recipes
          </button>

          <img
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
          />

          <h2>{selectedRecipe.strMeal}</h2>

          <p>
            <strong>Category:</strong> {selectedRecipe.strCategory}
          </p>

          <p>
            <strong>Area:</strong> {selectedRecipe.strArea}
          </p>

          <h3>Ingredients</h3>

          <ul>
            {Array.from({ length: 20 }, (_, index) => {
              const ingredient =
                selectedRecipe[`strIngredient${index + 1}`];

              const measure = selectedRecipe[`strMeasure${index + 1}`];

              if (ingredient && ingredient.trim()) {
                return (
                  <li key={index}>
                    {measure} {ingredient}
                  </li>
                );
              }

              return null;
            })}
          </ul>

          <h3>Instructions</h3>

          <p className="instructions">
            {selectedRecipe.strInstructions}
          </p>
        </div>
      )}

      {/* Recipe Cards */}
      {!selectedRecipe && (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div
              className="recipe-card"
              
              key={recipe.idMeal}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />

              <h2>{recipe.strMeal}</h2>

              <p>{recipe.strCategory}</p>

              <button>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;