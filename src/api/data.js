
import data from "api/data.json";


export function getCovers() {
	return data.map(function(covers){
		return {
			id: covers.id,
			label: covers.label,
			cvr: covers.cvr
		}
	});
}


export function getImages(id) {
	var album = data.filter(function(obj){
		return obj.id == id;
	})
	return {
		id: album[0].id,
		label:album[0].label,
		images:album[0].imgs
	}
}	


export function getImageById(id) { 
	var image = data.filter(function(obj){
		return Number(obj.id) === Number(id);
	})	
	return {
		imageid: image[0].imgs[0].id,
		imgs:image[0].imgs[0].img
		
	}
}

///works///
// export function getImageById(id) { 
// 	var image = data.filter(function(obj){
// 		return Number(obj.id) === Number(id);
// 	})	
// 	return {
// 		imageid: image[0].imgs[0].id,
// 		imgs:image[0].imgs[0].img
		
// 	}
// }

/////////////////////


///
// export function getImageById(id) { 
// 	var images = data.filter(function(obj){
// 		return Number(obj.id) === Number(id);
// 	})	
// 	return {
// 		id: images[0].id,
// 		image:images[0].imgs
		
// 	}
// }






