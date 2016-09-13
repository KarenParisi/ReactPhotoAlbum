import React from 'react';
import AlbumCvrs from "ui/AlbumCvrs";
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {getCovers} from 'api/data.js';
import { Link } from "react-router";
import Menu from "ui/Menu";

export default React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			data:getCovers()
		})
	},
	render: function () {
		return (
			<div>
			
				<div className="flexcontainer">
					<p className="header"> My Photo Albums </p>
					<AlbumCvrs data={this.state.data} />
				</div>
			</div>	
		)
	}
})