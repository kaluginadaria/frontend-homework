
const zip =  (...args) => {
	let result = {};
	args.forEach((obj) => {
		if(!obj || typeof(obj) != "object" || Array.isArray(obj)){
			throw new TypeError('unexpected value, not an Object');
		}
		Object.keys(obj).forEach((key) => {
	    	if(!(key in result)){
				let value = obj[key];
				result[key] = value;
	    	}   
		});
	});

  return result;
}