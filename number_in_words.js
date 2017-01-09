//recurs
function in_words(angka, kata = '') {
	let str = angka+'';
  let x = parseInt(str[0]);
	let satuan = ['',' satu ',' dua ',' tiga ',' empat ',' lima ',' enam ',' tujuh ',' delapan ',' sembilan '];
  let unik = ['satu puluh','satu puluh satu', 'satu puluh dua','satu puluh tiga','satu puluh empat',
	'satu puluh lima','satu puluh enam','satu puluh tujuh','satu puluh delapan','satu puluh sembilan','satu ratus'];
  let unikRep = ['sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas',
	'tujuh belas','delapan belas','sembilan belas','seratus']
  let tambahan = ['ribu','juta','milyar','triliun'];

  for(let i = 3; i < 16; i+=3){
  	if(str.length === i){
			if (x!=0) {
				kata += satuan[x]+'ratus'
			}
			return in_words(str.slice(1,i), kata)
	  }
  }
	for(let i = 2; i < 15; i+=3){
  	if(str.length === i){
			if (x!=0) {
				kata += satuan[x]+'puluh'
			}
			return in_words(str.slice(1,i), kata)
	  }
  }
	for(let i = 4, j = 0; i < 14; i+=3, j+=1){
		// j=0;
		// j+=1;
  	if(str.length === i){
			if (x!=0) {
				kata += satuan[x]+tambahan[j]
			}
			return in_words(str.slice(1,i), kata)
	  }
  }
	if(str.length === 1){
  	kata +=satuan[angka]
  }
  for(let i = 12; i >= 0; i--){
  	kata = kata.replace(unik[i], unikRep[i]);
  }

  return kata
}

console.log(in_words(9));
console.log(in_words(11));
console.log(in_words(24));
console.log(in_words(549));
console.log(in_words(789));
console.log(in_words(907));
console.log(in_words(23101));
console.log(in_words(16111987));
console.log(in_words(999000000000000));
console.log(in_words(999999999999999));
