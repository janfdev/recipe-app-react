import CallToAction from "./layouts/CTA";
import ResultRecipe from "./layouts/Recipes";
import React, { useState, useEffect } from "react";
import { fetchRecipes, Recipe } from "./lib/api";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searched || query.trim() === "") return;

    const getRecipes = async () => {
      try {
        const data = await fetchRecipes(query);
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      }
      setIsLoading(false);
    };
    getRecipes();
  }, [query, searched]);
  return (
    <section>
      <CallToAction setQuery={setQuery} setSearched={setSearched} />
      <ResultRecipe
        recipes={recipes}
        searched={searched}
        isLoading={isLoading}
      />
    </section>
  );
};

export default App;
