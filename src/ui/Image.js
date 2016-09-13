
import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";

export default React.createClass({
	handleBack: function () {
    	browserHistory.goBack();
  	},
	handleClick: function(e) {
		browserHistory.push("/")
	},
	render: function () {
		return (
			<div className="singflexcontainer">
			 	<button onClick={this.handleBack}> {"<"} Back </button>
				<p id="header2"> {this.props.image.imageid}</p>
				<img id="singleimg" src={this.props.image.imgs} />
			</div>
		)
	}
})





