const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php'

function formatIngredients(meal) {
  return Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal[`strIngredient${index + 1}`]?.trim()
    const measure = meal[`strMeasure${index + 1}`]?.trim()

    if (!ingredient) {
      return null
    }

    return measure ? `${measure} ${ingredient}` : ingredient
  }).filter(Boolean)
}

function formatRecipe(meal) {
  return {
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory || 'Recipe',
    description: `A ${meal.strCategory?.toLowerCase() || 'delicious'} recipe.`,
    image: meal.strMealThumb,
    ingredients: formatIngredients(meal),
    instructions: meal.strInstructions || 'No instructions available.',
  }
}

export async function searchRecipes(searchTerm) {
  const response = await fetch(`${API_URL}?s=${encodeURIComponent(searchTerm)}`)

  if (!response.ok) {
    throw new Error('The recipe service could not be reached.')
  }

  const data = await response.json()
  return (data.meals || []).map(formatRecipe)
}
