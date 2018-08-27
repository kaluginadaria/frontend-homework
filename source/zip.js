
const zip =  (...args) =>{
	let result = {};
	args.forEach((obj) => {
		Object.keys(obj).forEach((key) =>{
	    	if(typeof(key) != 'undefined' && !(key in result)){
				let value = obj[key];
				result[key] = value;
	    	}   
		});
	});

  
  return result;
}