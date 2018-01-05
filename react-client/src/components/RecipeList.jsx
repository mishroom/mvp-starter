import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  filter() {
    this.props.onChange();
  }
render() {
  return (
	<div>
	<div className="results">
	<h3>Recipes</h3>
  Filter By: <br />
	<form>
		<div className="radio">
          <label>

            <input type="radio" value="option1" 
                   checked={this.props.selectedOption === 'option1'} 
                   onChange={this.filter} />
            Most Popular  
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" 
                   checked={this.props.selectedOption === 'option2'} 
                   onChange={this.filter} />
            Unused Ingredients  
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" 
                   checked={this.props.selectedOption === 'option3'} 
                   onChange={this.filter} />
            Additional Ingredients  
          </label>
        </div>
	</form>
	<div>
	{ this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={this.props.onSave}/>)}
	</div>
	</div>


	<div className="liked">
	<h3>Saved Recipes</h3>
	{this.props.likedRecipes.map(recipe => <Liked key={recipe.id} recipe={recipe} onDelete={this.props.onDelete} />)}

	</div>  

	</div>
	)
}
}
export default RecipeList;