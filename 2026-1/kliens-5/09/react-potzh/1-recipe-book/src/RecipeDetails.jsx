const RecipeDetails = ({ recipe, handleRecipeSelect }) => {
    return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto mt-8 bg-blue-300">
        <img
          className="w-full h-200px object-cover"
          src={recipe.image}
          alt="Recipe"
        />
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <p className="text-gray-700 text-base">{recipe.description}</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold mb-2">Hozzávalók:</h2>
          <ul className="list-disc pl-6">
              {recipe.ingredients.map((e,index) => 
                <li key={index} className="text-gray-700">
                  {e}
                </li>
              )}
            
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded my-2" onClick={()=> handleRecipeSelect(null)}>
            Vissza
          </button>
        </div>
      </div>
    );
  };
  

export default RecipeDetails;