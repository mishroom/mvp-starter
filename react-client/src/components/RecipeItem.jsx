import React from 'react';

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }


  save() {
    // this.setState({
    //   recipe: e.target
    // });
    console.log("THIS:  ",this);
    this.props.onSave(this.props.recipe);
  }

  render() {
    console.log("RECIPE  ",this.props)
    return (
      <div className='recipe'>
        <div className ='col'>
          Recipe Name: { this.props.recipe.title } <br />
          Likes: { this.props.recipe.likes }
        </div>
        <div className ='col'>
          <img src={ this.props.recipe.image } />
        </div>
        <button onClick={this.save} > Save Recipe </button>
      </div>
      )}
  }

  export default RecipeItem;