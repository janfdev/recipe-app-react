import React from "react";
import { Recipe } from "@/lib/api";

interface RecipesProps {
  recipes: Recipe[];
  searched: boolean;
}

const ResultRecipe: React.FC<RecipesProps> = ({ recipes, searched }) => {
  return (
    <div className="mx-auto mt-10 md:max-w-4xl max-w-md md:px-0 px-10  w-full text-center">
      <h1 className="text-2xl font-semibold">Result Recipes</h1>
      {!searched && (
        <p className="text-center text-gray-500 mt-3">No recipes found</p>
      )}

      {searched && recipes.length > 0 && (
        <ul className="grid md:grid-cols-3 grid-cols-1 gap-10 px-5 mt-5">
          {recipes.map((recipe) => (
            <li
              key={recipe.idMeal}
              className="shadow-lg p-10 flex items-center flex-col gap-3 rounded-md px-5 py-5"
            >
              <h3 className="md:text-xl text-lg font-semibold">
                {recipe.strMeal}
              </h3>
              <img
                className="rounded-full w-40"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <p className="text-md font-medium">
                {recipe.strCategory} | {recipe.strArea}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultRecipe;
