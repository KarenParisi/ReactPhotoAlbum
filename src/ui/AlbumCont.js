
import React from 'react';
import Album from "ui/Album";
import {getImages} from "api/data.js";
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";
import MenuCont from "ui/MenuCont";


export default React.createClass({
	handleBack: function () {
    	hashHistory.goBack();
  	},
	getInitialState:function(){
		return{
			album:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			album:getImages(this.props.params.albumId)
		})
	},
	render: function () {
		// console.log('data',this.state.data)
		return (
			<div> <MenuCont />
				<div className="flexcontainer">
					<button onClick={this.handleBack}> {"<"} Back </button>
					<Album album={this.state.album} />	
				</div>	
			</div>	
		)
	}
})
