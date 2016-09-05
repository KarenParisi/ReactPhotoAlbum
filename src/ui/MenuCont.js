import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";
import { getMenu } from "api/data.js";
import MenuList from "ui/MenuList";


export default React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			data:getMenu()
		})
	},
	render: function () {
		return (
			<div>
				<div className="menudiv">
					<MenuList data={this.state.data} />
				</div>
			</div>
		)
	}
})

