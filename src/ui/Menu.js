import React from 'react';
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';

export default React.createClass({
	render: function () {
		return (
			<div className="tagsdiv">
				<ul className="tagstyle">
					<Link to={"/AlbumCont/" + this.props.id } style={{ textDecoration: 'none' }}>
					<div> <li className="tagstyle">  {this.props.label}  </li> </div>
					</Link>
				</ul>
			</div>
		)
	}
})

