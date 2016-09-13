import React from 'react';
import Image from 'ui/Image';
import {getImageById} from 'api/data';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";


export default React.createClass({
handleBack: function () {
    	hashHistory.goBack();
  	},
	getInitialState: function () {
		return {
			image:''
		}
	},
	componentWillMount: function() {
		this.setState({
			image: getImageById(this.props.params.imageId)
		})
	},
	render: function () {
		return (
			<div>
				<Image image={this.state.image} />
			</div>
		)
	}
})



