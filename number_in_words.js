function get_first_num(value){
	value = value.toString();
	return parseInt(value[0]);
}

function to_word(value, result = "") {
	var nums 	= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,100,1000,1000000,1000000000, 1000000000];
	var words 	= ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "seratus", "seribu", "satu juta", "satu miliar", "satu triliun"]; 

	if(value.toString().length == 1) {
		result += words[value];
		return result;
	}	

	if(value.toString().length == 2) {
		if(value < 20) {
			result += words[value];
			return result;
		} else {
			let firstNum = get_first_num(value);
			result += words[firstNum];
			result += " puluh ";
			value = value - (10*firstNum);
			return to_word(value, result);
		}
	}

	if(value.toString().length == 3) {
		let firstNum = get_first_num(value);
		if(firstNum === 1) {
			result += "seratus ";
			value = value - (100*firstNum);
			return to_word(value, result);
		} else {
			result += words[firstNum];
			result += " ratus ";
			value = value - (100*firstNum);
			return to_word(value, result);
		}
	}

	if(value.toString().length == 4) {
		let firstNum = get_first_num(value);
		if(firstNum === 1) {
			result += "seribu ";
			value = value - (1000*firstNum);
			return to_word(value, result);
		} else {
			result += words[firstNum];
			result += " ribu ";
			value = value - (1000*firstNum);
			return to_word(value, result);
		}
	}	

	if(value.toString().length == 7) {
		let firstNum = get_first_num(value);
		if(firstNum === 1) {
			result += "sejuta ";
			value = value - (1000000*firstNum);
			return to_word(value, result);
		} else {
			result += words[firstNum];
			result += " juta ";
			value = value - (1000000*firstNum);
			return to_word(value, result);
		}
	}	

	if(value.toString().length == 10) {
		let firstNum = get_first_num(value);
		if(firstNum === 1) {
			result += "satu miliar ";
			value = value - (1000000000*firstNum);
			return to_word(value, result);
		} else {
			result += words[firstNum];
			result += " miliar ";
			value = value - (1000000000*firstNum);
			return to_word(value, result);
		}
	}	

	if(value.toString().length == 13) {
		let firstNum = get_first_num(value);
		if(firstNum === 1) {
			result += "satu triliun ";
			value = value - (1000000000000*firstNum);
			return to_word(value, result);
		} else {
			result += words[firstNum];
			result += " miliar ";
			value = value - (1000000000000*firstNum);
			return to_word(value, result);
		}
	}	
}
// Driver code
console.log(to_word(11));
console.log(to_word(12));
console.log(to_word(19));
console.log(to_word(99));
console.log(to_word(70));
console.log(to_word(130));
console.log(to_word(999));
console.log(to_word(1999));
console.log(to_word(1999888));
console.log(to_word(1999888777));
console.log(to_word(1999888777666));