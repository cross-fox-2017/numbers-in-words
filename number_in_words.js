function in_words(angka) {
  // Your code here
  let str = '';
  let angkaStr = angka.toString().split('');
  let x=angkaStr.length;

  for (let n = 0 ; n < angkaStr.length ; n++){

    if(angkaStr[n] === '1'){
      str += 'Satu ';
    }
    if(angkaStr[n]  === '2'){
      str += 'Dua ';
    }
    if(angkaStr[n]  === '3'){
      str += 'Tiga ';
    }
    if(angkaStr[n]  === '4'){
      str += 'Empat ';
    }
    if(angkaStr[n]  === '5'){
      str += 'Lima ';
    }
    if(angkaStr[n]  === '6'){
      str += 'Enam ';
    }
    if(angkaStr[n]  === '7'){
      str += 'Tujuh ';
    }
    if(angkaStr[n]  === '8'){
      str += 'Delapan ';
    }
    if(angkaStr[n]  === '9'){
      str += 'Sembilan ';
    }
    if(angkaStr[n]  === '0'){
      str += '';
    }

    if(x == 3){
      str += 'Ratus ';
    }
    if(x == 2){
      str += 'Puluh ';
    }
    x--;

  }

  return str;
}

// Driver code
// console.log(in_words(1000000));
console.log(in_words(4));
console.log(in_words(45));
console.log(in_words(471));
