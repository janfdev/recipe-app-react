import React from "react";
import { Recipe } from "@/lib/api";

interface RecipesProps {
  recipes: Recipe[];
  searched: boolean;
  isLoading: boolean;
}

const ResultRecipe: React.FC<RecipesProps> = ({
  recipes,
  searched,
  isLoading
}) => {
  return (
    <div className="mx-auto mt-10 md:max-w-4xl max-w-md md:px-0 px-10  w-full text-center">
      <h1 className="text-2xl font-semibold">Result Recipes</h1>
      {!searched && (
        <p className="text-center text-gray-500 mt-3">No recipes found</p>
      )}

      {isLoading && (
        <div className="flex items-center justify-center">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      )}

      {isLoading && searched && recipes.length === 0 && (
        <p className="text-gray-500 mt-3">Resep tidak ditemukan.</p>
      )}

      {isLoading && searched && recipes.length > 0 && (
        <ul className="grid md:grid-cols-3 grid-cols-1 gap-10 px-5 mt-5">
          {recipes.map((recipe) => {
            const tagMeals = recipe.strTags ? recipe.strTags.split(",") : [];
            return (
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
                <div className="flex flex-wrap gap-2">
                  {tagMeals.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-blue-700"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ResultRecipe;
