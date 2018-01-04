import React from 'react';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => (
  <div>
    { props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)}
  </div>
)

export default RecipeList;