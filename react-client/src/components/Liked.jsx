import React from 'react';

class Liked extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			
		}
		this.save = this.search.bind(this);
	}

	

	save() {
		this.props.onSave(this.state.query);
	}

	render() {
		return (
			<div>    
			<button onClick={this.save}> Add Ingredent </button>
			</div>
			)
	}
}

export default Liked;