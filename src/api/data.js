
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
export function getMenu() {
	return data.map(function(list){
		return {
			id: list.id,
			label: list.label
			
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

//data//
export function getImageById(id) { //for contacts singleview
	var images = data.filter(function(obj){
		return Number(obj.id) === Number(id);
	})	
	return {
		id: images[0].id,
		image:images[0].imgs
		
	}
}








////////////////////////////////////////////////////////

// SAVE
// import data from "api/data.json";


// export function getCovers() {
// 	return data.map(function(covers){
// 		return {
// 			id: covers.id,
// 			label: covers.label,
// 			cvr: covers.cvr
// 		}
// 	});
// }
// export function getMenu() {
// 	return data.map(function(list){
// 		return {
// 			id: list.id,
// 			label: list.label
			
// 		}
// 	});
// }


// export function getImages(id) {
// 	var album = data.filter(function(obj){
// 		return obj.id == id;
// 	})
// 	return {
// 		id: album[0].id,
// 		label:album[0].label,
// 		images:album[0].imgs
// 	}
// }	

// //data//
// export function getImageById(id) { //for contacts singleview
// 	var images = data.filter(function(obj){
// 		return Number(obj.id) === Number(id);
// 	})	
// 	return {
// 		id: images[0].id,
// 		image:images[0].imgs
		
// 	}
// }