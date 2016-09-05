import React from 'react';
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';


export default React.createClass({
	render: function () {
		return (
			<div className="innercontainer"> 
				<ul className="cvrimgs"> 
					<Link to={"/AlbumCont/" + this.props.id } style={{ textDecoration: 'none' }}>
					<li> <p id="header2">{this.props.label} </p> <img src={this.props.cvr} /> </li>
					</Link>
				</ul>
			</div>
		)
	}
})
