import React, { useEffect, useState } from 'react'; 
import './App.css';
import Recipe from './Recipe';


const App = () => {
const APP_ID="11d60150";
const APP_KEY = "1759516a9e17f873a2d84810173631a4"; 
const [recipes, setRecipes] = useState([]); 
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipe();
}, [query]);

const getRecipe = async () => {
const response = await fetch(
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
const data = await response.json();
setRecipes(data.hits);
};

const updateSearch = e => {
setSearch(e.target.value);

};

const getSearch = e => {
e.preventDefalut();
setQuery(search);
setSearch('');
}; 


return(
  <div className="App">
   <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type="text" placeholder="search food" value={search} onChange={updateSearch} />
     <button className="search-button" type='submt'>Search</button>
   </form>
   <div className="recipes">
     {recipes.map(recipe =>(
       <Recipe 
       
       image={recipe.recipe.image}
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       cuisines = {recipe.recipe.cuisines}
       mealLabels = {recipe.recipe.mealLabels}
       dish = {recipe.recipe.dish}
       healthLabels = {recipe.recipe.healthLabels}
       calories={recipe.recipe.calories}
       totalTime = {recipe.recipe.totalTime}
       dietLabels = {recipe.recipe.dietLabels}
       />
     ))}
     </div> 
  </div>
);
}

export default App;
