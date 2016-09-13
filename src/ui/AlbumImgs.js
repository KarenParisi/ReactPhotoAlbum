import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";




export default React.createClass({
	handleClick: function(e) {
		browserHistory.push("/")
	},
	
	render: function () {
		return (
			<div className="innercontainer"> 
				<div  className="albums">
				<p className="header"> {this.props.label} </p>
					<ul>
						<li> 
							<Link to={"/ImageCont/" + this.props.id} style={{ textDecoration: 'none' }}> 
							<p id="header2"> {this.props.imageid} </p>
							<img src={this.props.src} />

							</Link>
						</li>
					</ul>

				</div>	
			</div>
		)
	}
})

 	// <p className="header"> {this.props.label} </p>