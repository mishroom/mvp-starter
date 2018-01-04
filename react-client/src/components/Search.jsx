import React from 'react';

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			//add stuff here
			ingredient: ""
		}
	}

	onChange(e) {

	}

	search() {
		
	}

	render() {
		return (
			<div>
			Enter an ingredient <input value={this.state.ingredients} onChange={this.onChange}/>       
			<button onClick={this.search}> Add Ingredent </button>
			</div>
		)
	}
}

export default Search;