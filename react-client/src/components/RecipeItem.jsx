import React from 'react';

const RecipeItem = (props) => (
  <div className='recipe'>
  	<div className ='col'>
	    Recipe Name: { props.recipe.title }
	    Likes: { props.recipe.likes }
    </div>
    <div className ='col'>
    <img src={ props.recipe.image } />
    </div>
    <button > Save Recipe </button>
  </div>
)

export default RecipeItem;