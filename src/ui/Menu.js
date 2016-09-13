import React from 'react';
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import AlbumCvrs from "ui/AlbumCvrs";

export default React.createClass({
	render: function () {
		return (
			<div className="menudiv">
				<ul className="menutext">
					<Link to={"/AlbumCont/" + this.props.id }> <li> Album 1</li> </Link>
					<li> Album 2</li>
					<li> Album 3</li>
					<li> Album 4</li>
					<li> Album 5</li>
					<li> Album 6</li>
				</ul>
			</div>
		)
	}
})





//<Link to ="albumDetail" params={{albumId: 2}}> <li> Album 1</li> </Link>


//<Link to="employeeDetail" params={{employeeId: 1}}>Go to employee #1</Link> 



