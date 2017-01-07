function in_words(angka, result = '') {
	let arr = angka.toString().split('');
  // arr = [1,0]
  let word = ['',' satu ', ' dua ', ' tiga ', ' empat ', ' lima ', ' enam ', ' tujuh ', ' delapan ', ' sembilan ', 
  ' sepuluh ', ' sebelas ', ' dua belas ',' tiga belas ',' empat belas ',' lima belas ',' enam belas ',' tujuh belas ',' delapan belas ',' sembilan belas '];
  let add = ['ribu','juta','milyar','triliun'];

  for(let i = 3; i <= 15; i+=3){
  	if(arr.length === i){
	  	let x;
	  	result += `${word[arr[0]]}ratus`
	  	x = parseInt(arr.slice(1,i).join(''));
			return in_words(x, result)
	  }
  }
  
  for(let i = 2; i <= 14; i+=3){
  	if(arr.length === i){
	  	let x;
	  	result += `${word[arr[0]]}puluh`
	  	x = parseInt(arr.slice(1,i).join(''));
			return in_words(x, result)
	  }
  }

  for(let i = 4, j = 0; i <= 13; i+=3, j++){
  	if(arr.length === i){
	  	let x;
	  	result += `${word[arr[0]]}${add[j]}`
	  	x = parseInt(arr.slice(1,i).join(''));
			return in_words(x, result)
	  }
  }
  
  if(arr.length === 1){
    return result += word[angka];
  }
}

// Driver code
console.log(in_words(1));
console.log(in_words(86));
console.log(in_words(277));
console.log(in_words(9879));
console.log(in_words(68214));
console.log(in_words(451542));
console.log(in_words(1646121));
console.log(in_words(51984121));
console.log(in_words(564561251));
console.log(in_words(2973482393));
console.log(in_words(21564561454));
console.log(in_words(991231710947));
console.log(in_words(914239718947817));

