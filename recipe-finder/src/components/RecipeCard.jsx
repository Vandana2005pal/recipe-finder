function RecipeCard({ recipe, onSelect }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-content">
        <p className="recipe-category">{recipe.category}</p>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <button type="button" onClick={() => onSelect(recipe)}>
          View details
        </button>
      </div>
    </article>
  )
}

export default RecipeCard
