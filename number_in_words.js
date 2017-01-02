function in_words(angka) {
  // Your code here
  var satuan= ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"];
  var number = [1,2,3,4,5,6,7,8,9,10];
  var result = [];

  for (var i = 0; i < satuan.length; i++){
    if(angka == number[i]){
      result.push(satuan[i])
    }
  }
  return result
}

// Driver code
// console.log(in_words(1000000));
console.log(in_words(5));
// console.log(in_words(27));
// console.log(in_words(102));
// console.log(in_words(38757));
// console.log(in_words(22213717));
