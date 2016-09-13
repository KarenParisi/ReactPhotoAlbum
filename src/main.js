import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import RouteHandler from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Layout from "layout/Layout";

// UI
import AlbumsCont from 'ui/AlbumsCont';
import AlbumCont from "ui/AlbumCont";
import Image from "ui/Image";
import ImageCont from "ui/ImageCont";



import Images from "ui/images";
// import Label from "ui/Label";

var style = require("layout/styles.scss")


const Site = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
	    <Route component={Layout}>
			    <Route path="/" component={AlbumsCont} />
			  
			 	
			    

			    <Route path="/AlbumCont/:albumId" component={AlbumCont} />
			    <Route path="/ImageCont/:imageId" component={ImageCont} />
		</Route>
    </Router>   
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));
  //<Route name="albumDetail" path="/AlbumCont/:albumId" handler={require('ui/Menu.js')} />
 // <Route name="albumDetail" path="/AlbumCont/:empoyeeId" handler={require('./components/Menu.js')} />


 // <Route path="/ImagePg/:imageId" component={ImagePg} />