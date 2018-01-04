import React from 'react';

const RecipeItem = (props) => (
  <div>
    Recipe Name: { props.recipe.title }
    Likes: { props.recipe.likes }
    <img src={ props.recipe.image } />
    <button > Save Recipe </button>
  </div>
)

export default RecipeItem;