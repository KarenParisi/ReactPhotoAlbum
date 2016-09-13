
import React from 'react';
import AlbumImgs from "ui/AlbumImgs";
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";

export default React.createClass({
	render: function () {
		return (
			<div>
				<ul> 
					{this.props.album.images.map((imgs, i) => {
					return <AlbumImgs key={i} id={this.props.album.id} label={this.props.album.label} imageid={imgs.id} src={imgs.img} />
				})}
					{this.props.children}
				</ul>
			</div>
		)
	}
})
