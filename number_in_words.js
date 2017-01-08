function get_first_num(value){
	value = value.toString();
	return parseInt(value[0]);
}

function hundreds(value, result = "") {
	var nums 	= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,100];
	var words 	= ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "seratus"];

	if(value.toString().length == 1) {
		result += words[value];
		return result;
	}

	if(value.toString().length == 2) {
		if(value < 20) {
			result += words[value];
			return result;
		}
		else {
			let firstNum = get_first_num(value);
			result += words[firstNum];
			result += " puluh ";
			value = value - (10*firstNum);
			return hundreds(value, result);
		}
	}

	if(value.toString().length == 3) {
		let firstNum = get_first_num(value);
		if(firstNum === 1){
			result += "seratus ";
			value = value - (100*firstNum);
			return hundreds(value, result);
		}
		else{
			if(words[firstNum] != 0){
				result += words[firstNum];
				result += " ratus ";
				value = value - (100*firstNum);
				return hundreds(value, result);
			}
			else return hundreds(Number(value.toString().substring(1,3)), result);
		}
	}
}

function to_word(num){
	var words_links = ["","ribu","juta","miliyar","triliun"];
	var num_arr_split = num.toString().match(/.{1,3}/g);
	var num_length = num.toString().length
	//let num_arr_split2 = num.toString().substring(num.toString().length%3).match(/.{1,3}/g);
	var word_arr = [];
	var word_links_needed = []
	var num_converted = ""

	if(num_arr_split.length == 1){
		return hundreds(num)
	}
	else{
		if(num_length%3 === 0){
			for(i=0; i<num_arr_split.length; i++){
				if(num_arr_split[i] === "000"){
					word_arr.push("")
				}
				else{
					word_arr.push(hundreds(num_arr_split[i]))
				}
			}
		}
		else{
			var first_group_digit = num.toString().substring(0,num_length%3)
			var rest_group = num.toString().substring(num_length%3,num_length).match(/.{1,3}/g);
			for(i=0; i<num_arr_split.length; i++){
				if(i == 0){
					if(first_group_digit == "1" && first_group_digit.length + rest_group.length == 2){
						word_arr.push("se");
					}
					else{
						word_arr.push(hundreds(first_group_digit));
					}
				}
				else{
					if(rest_group[i] === "000"){
						word_arr.push("")
					}
					else{
						word_arr.push(hundreds(rest_group[i-1]));
					}
				}
			}
		}

		for(i=0; i<word_arr.length; i++){
			if(word_arr[i] == ""){
				word_links_needed.push("")
			}
			else{
				word_links_needed.push(words_links[word_arr.length-1-i])
			}
		}

		for(i=0; i<word_arr.length; i++){
			num_converted = num_converted + word_arr[i] + " " + word_links_needed[i] + " "
		}
		return num_converted
	}
}

console.log(to_word(11));
console.log(to_word(12));
console.log(to_word(19));
console.log(to_word(99));
console.log(to_word(103));
console.log(to_word(2202));
console.log(to_word(666));
console.log(to_word(999999999999999));
