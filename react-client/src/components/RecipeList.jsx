import React from 'react';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => (
  <div>
    props.recipes is an array
    
    { props.recipes.map(recipe => <RecipeItem key={recipe.name} recipe={recipe}/>)}
  </div>
)

export default RecipeList;