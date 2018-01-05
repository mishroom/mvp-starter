import React from 'react';
import $ from 'jquery';

class Liked extends React.Component {

	constructor(props) {
		super(props);
		//this.save = this.save.bind(this);
	}

	render() {
		console.log(this.props);
		// if(this.props.recipe){
			return (
				<div className='likedRecipe'>
						<div className ='col'>
							Recipe Name: { this.props.recipe.title }<br />
							Likes: { this.props.recipe.likes }
						</div>
						<div className ='col'>
							<img src={ this.props.recipe.image } />
						</div>
				</div>

				)
		// }
		// else {
		// 	return (
		// 		<div/>
		// 		)
		// }
	}
}

export default Liked;


/*

<div className='recipe'>
			<div className ='col'>
			Recipe Name: { this.props.recipe.title }
			Likes: { this.props.recipe.likes }
			</div>
			<div className ='col'>
			<img src={ this.props.recipe.image } />
			</div>
			</div>

*/