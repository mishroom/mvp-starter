import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import List from './components/List.jsx';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeItems from './components/RecipeItem.jsx';
import Past from './components/Past.jsx';
// import StyleSheet from './../dist/style.css';

var sampleData = [
  {
    "id":556470,
    "title":"Apple fritters",
    "image":"https://spoonacular.com/recipeImages/Apple-fritters-556470.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":243
  },
  {
    "id":47950,
    "title":"Cinnamon Apple Crisp",
    "image":"https://spoonacular.com/recipeImages/cinnamon_apple_crisp-47950.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":35
  },
  {
    "id":534573,
    "title":"Brown Butter Apple Crumble",
    "image":"https://spoonacular.com/recipeImages/Brown-Butter-Apple-Crumble-534573.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":7
  },
  {
    "id":47732,
    "title":"Apple Tart",
    "image":"https://spoonacular.com/recipeImages/apple_tart-47732.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":0
  },
  {
    "id":47891,
    "title":"Apple Tart",
    "image":"https://spoonacular.com/recipeImages/apple_tart-47891.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":0
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ingredients: [],
      recipes: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search(ingredient) {
      console.log('BUTTON CLICK: ', ingredient);
      this.setState({recipes: sampleData});
  }

  render () {
    return (
      <div id='parent'>
        <div className="header">
        <h1>~ Welcome to ~</h1>
        <h1>RefridgerRaider</h1>
        </div>

        <div className="search">
        <h3>Search</h3>
        <Search onSearch={this.search.bind(this)}/>
        </div>

        <div className="results">
        <h3>Recipes</h3>
        <RecipeList recipes={this.state.recipes}/>
        </div>

        <div className="past">
        <h3>Previous Searches</h3>
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

