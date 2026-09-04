import RecipeCard from './RecipeCard'

function RecipeGrid({ recipes, onSelect }) {
  return (
    <section aria-labelledby="results-heading">
      <div className="section-heading">
        <h2 id="results-heading">Recipes</h2>
        <span>{recipes.length} found</span>
      </div>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}

export default RecipeGrid
