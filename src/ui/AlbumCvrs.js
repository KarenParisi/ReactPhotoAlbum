import React from 'react';
import Covers from "ui/Covers";


export default React.createClass({
	render: function () {
		return (
			<div> 
				<ul className="cvrimgs"> 
					{this.props.data.map(function(covers, i){
					return <Covers key={i} id={covers.id} cvr={covers.cvr} label={covers.label} />
					})}
					
				</ul>
			</div>		
		)
	}
})