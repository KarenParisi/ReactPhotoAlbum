import React from 'react';
import Image from "ui/Image";

export default React.createClass({
	render: function () {
		return (
			<div>
				<ul> 
					{this.props.images.image.map((imgs, i) => {
					return <Image key={i} id={imgs
						.id} src={imgs.img} />
				})}
				</ul>
			</div>
		)
	}
})



///
// export default React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<ul> 
// 					{this.props.images.image.map((imgs, i) => {
// 					return <Image key={i} id={imgs
// 						.id} src={imgs.img} />
// 				})}
// 				</ul>
// 			</div>
// 		)
// 	}
// })