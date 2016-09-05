import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Link } from "react-router";



var divStyle = {
	backgroundImage: 'url("https://www.colourbox.com/preview/2012274-black-and-white-background-with-paws.jpg")',
	WebkitTransition: 'all', // note the capital 'W' here
  	msTransition: 'all',
  	resizeMode: 'cover',
  	flex:1,
  	position:'absolute',
  	top: 0, bottom: 0, left: 0, right: 0,
  	backgroundSize: 'cover',
  	justifyContent: 'center',
  	alignItems: 'center',

 
 
};
export default React.createClass({
  render: function () {
    return (
        <div style={divStyle}>
          
           
     
           <main>
              {this.props.children}
            </main>
        </div>
    )
  }
})