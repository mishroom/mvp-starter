import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import List from './components/List.jsx';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeItems from './components/RecipeItem.jsx';
import Past from './components/Past.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ingredients: [],
      recipes: [{name: 'RECIPE 1'}, {name: 'RECIPE 2'}]
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