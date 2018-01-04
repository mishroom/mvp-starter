import React from 'react';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => {
	console.log(props);
	return (
  <div>
    { props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)}
  </div>
)}

export default RecipeList;