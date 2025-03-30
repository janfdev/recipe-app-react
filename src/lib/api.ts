const API_URL = import.meta.env.VITE_API_URL;

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

export const fetchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await fetch(`${API_URL}/search.php?s=${query}`);

    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes: ", error);
    return [];
  }
};
