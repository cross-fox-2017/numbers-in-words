function in_words(angka, result = '') {
	let arr = angka.toString().split('');
  // arr = [1,0]
  let word = ['',' satu ', ' dua ', ' tiga ', ' empat ', ' lima ', ' enam ', ' tujuh ', ' delapan ', ' sembilan '];
  let revisi = ['satu puluh','satu puluh satu', 'satu puluh dua','satu puluh tiga','satu puluh empat','satu puluh lima',
  'satu puluh enam','satu puluh tujuh','satu puluh delapan','satu puluh sembilan','satu ratus','satu ribu'];
  let change = ['sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas','seratus','seribu']
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
    result += word[angka];
  }

  // replace unique number
  for(let i = 11; i >= 0; i--){
  	result = result.replace(revisi[i], change[i]);
  }

  return result
}

// Driver code
console.log(in_words(1));
console.log(in_words(10));
console.log(in_words(18));
console.log(in_words(86));
console.log(in_words(219));
console.log(in_words(1211));
console.log(in_words(68212));
console.log(in_words(1646118));
console.log(in_words(21564561454));
console.log(in_words(911239718947817));

