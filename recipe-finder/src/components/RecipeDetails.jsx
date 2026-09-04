function RecipeDetails({ recipe, onBack }) {
  return (
    <section className="recipe-details" aria-labelledby="details-heading">
      <button type="button" className="back-button" onClick={onBack}>
        Back to recipes
      </button>
      <div className="details-layout">
        <img src={recipe.image} alt={recipe.title} />
        <div>
          <p className="recipe-category">{recipe.category}</p>
          <h2 id="details-heading">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </section>
  )
}

export default RecipeDetails
