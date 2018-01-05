import React from 'react';

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   query: ""
    // }
    this.save = this.save.bind(this);
  }


  save() {
    this.props.onSave();
  }

  render() {
    return (
      <div className='recipe'>
      <div className ='col'>
      Recipe Name: { this.props.recipe.title }
      Likes: { this.props.recipe.likes }
      </div>
      <div className ='col'>
      <img src={ this.props.recipe.image } />
      </div>
      <button onClick={this.save}> Save Recipe </button>
      </div>
      )}
  }

  export default RecipeItem;