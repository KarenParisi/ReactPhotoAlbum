import React from 'react';
import Images from 'ui/Images';
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
			images: []
		}
	},
	componentWillMount: function() {
		this.setState({
			images: getImageById(this.props.params.imageId)
		})
	},
	render: function () {
		return (
			<div>
				<Images images={this.state.images} />
			</div>
		)
	}
})



