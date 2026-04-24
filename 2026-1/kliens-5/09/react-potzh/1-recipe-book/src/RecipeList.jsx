
const RecipeList = ({ recipes, handleRecipeSelect }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {recipes.map((e,index) => 
            <div onClick={()=>handleRecipeSelect(e)} key={index} className="max-w-sm rounded flex flex-col overflow-hidden shadow-lg m-5 bg-blue-300">
                <img
                  className="w-full h-200px object-cover"src={e.image} alt="Recipe"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{e.name}</div>
                  <p className="text-gray-700 text-base">{e.description}</p>
                </div>
                <div className="px-6 py-4 mt-auto">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {e.preparationTime}
                  </span>
                </div>
              </div>
        )}
      </div>
    );
  };

export default RecipeList;