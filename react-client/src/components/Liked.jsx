import React from 'react';
import $ from 'jquery';

class Liked extends React.Component {
	
	render() {
		$.ajax({
			url: `http://localhost:3000/storage`,
			type: 'GET',
      //contentType: 'application/json',
      //data: JSON.stringify(recipe),
      success: (data) => {
      	console.log("GET", data);
      },
      error: (err) => {
      	console.error(err);
      }
  })
		return (
			<div>
			LIKED VIDEOS HERE
			</div>
			)
	}
}

export default Liked;