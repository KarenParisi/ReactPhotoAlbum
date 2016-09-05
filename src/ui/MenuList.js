import React from 'react';
import Menu from "ui/Menu";
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';

export default React.createClass({
	render: function () {
		return (
			<div> 
				<ul>
					{this.props.data.map(function(menu, i){
					return <Menu key={i} id={menu.id}  label={menu.label} />
					})}
				</ul>
			</div>		
		)
	}
})

