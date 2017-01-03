
function in_words(angka) {
  var num = angka.toString().split('');
  var terbilang = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  var imbuhan = ['', 'ribu', 'juta', 'milyar', 'Triliun',];

  var i = 0;
  var j = 0;

   var allKata = '';
   var kataBagian = '';
   var kataI = "";
   var kataII = "";
   var kataIII = "";

   var numLength = num.length;

  while (i < numLength) {

    // ratusan
      if (num[i] === '1') {
        kataI = "seratus";
      }
      else {
        kataI = terbilang[num[i]] + " ratus";
      }

    // puluhan
      if (num[i+1] === '1'){
        /* sepuluh */
        if (num[i+2] === '0'){
          kataII = 'sepuluh';
        }
        /* sebelas */
        else if (num[i+2] === '1'){
          kataII = 'sebelas';
        }
        /* belasan */
        else {
        kataII = terbilang[num[i+2]] + ' belas';
        }
      /* 20 - 90 */
      }
      else {
        kataII = terbilang[num[i+1]] + ' puluh';
      }

    // satuan
       if (num[i+1] !== 1) { // belasan sudah masuk di puluhan
         kataIII = terbilang[num[i+2]];
       }
    }
  allKata = kataI + ' ' + kataII + ' ' + kataIII;
  return allKata;
}


console.log(in_words(439));
console.log(in_words(999));
