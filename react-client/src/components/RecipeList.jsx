import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';

const RecipeList = (props) => (
	<div>
	<div className="results">
	<h3>Recipes</h3>
	{ props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={props.onSave}/>)}
	</div>


	<div className="liked">
	<h3>Saved Searches</h3>
	{props.likedRecipes.map(recipe => <Liked key={recipe.id} recipe={recipe} />)}

	</div>  

	</div>
	)

export default RecipeList;