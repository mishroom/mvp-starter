import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';

const RecipeList = (props) => (
	<div>
	<div className="results">
	<h3>Recipes</h3>
	<form>
		<div className="radio">
          <label>
            <input type="radio" value="option1"  />
            Most Popular
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Uses All Ingredients
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Uses Additional Ingredients
          </label>
        </div>
	</form>
	<div>
	{ props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={props.onSave}/>)}
	</div>
	</div>


	<div className="liked">
	<h3>Saved Recipes</h3>
	{props.likedRecipes.map(recipe => <Liked key={recipe.id} recipe={recipe} onDelete={props.onDelete} />)}

	</div>  

	</div>
	)

export default RecipeList;