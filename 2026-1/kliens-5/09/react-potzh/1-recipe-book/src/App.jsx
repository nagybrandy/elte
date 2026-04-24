import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import {recipes} from "./data/recipes"

const App = () => {
  console.log(recipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null); // TODO: Cseréld le ezt a változót, hogy a komponens belső állapotára hivatkozzon
  const handleRecipeSelect = (e) => {
    setSelectedRecipe(e)
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Recipe Book</h1>

            {selectedRecipe === null 
              ? <RecipeList recipes={recipes} handleRecipeSelect={handleRecipeSelect} /> :
                <RecipeDetails recipe={selectedRecipe} handleRecipeSelect={handleRecipeSelect} /> 
        }
    </div>
  );
};

export default App;
