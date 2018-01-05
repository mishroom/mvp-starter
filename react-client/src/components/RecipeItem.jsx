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
    // console.log("THIS:  ",this);
    this.props.onSave(this.props.recipe);
  }

  render() {
    var link =  this.props.recipe.image.slice(0,23) + this.props.recipe.image.slice(36)
    return (
      <div className='recipe'>
        <div className ='col'>
          Name: <a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title } </a><br />
          Likes: { this.props.recipe.likes } <br />
        </div>
        <div className ='col'>
          <img src={ this.props.recipe.image } />
        </div>
        <button onClick={this.save} > Save Recipe </button>
      </div>
      )}
  }

  export default RecipeItem;