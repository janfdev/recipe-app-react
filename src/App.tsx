import CallToAction from "./layouts/CTA";
import ResultRecipe from "./layouts/Recipes";
import React, { useState, useEffect } from "react";
import { fetchRecipes, Recipe } from "./lib/api";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!searched || query.trim() === "") return;

    const getRecipes = async () => {
      const data = await fetchRecipes(query);
      setRecipes(data);
    };

    getRecipes();
  }, [query, searched]);
  return (
    <section>
      <CallToAction setQuery={setQuery} setSearched={setSearched} />
      <ResultRecipe recipes={recipes} searched={searched} />
    </section>
  );
};

export default App;
