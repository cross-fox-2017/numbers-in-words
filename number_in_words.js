function in_words(angka) {
  // Your code here
  var panjang = angka.toString().length
  var satuan= ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  // var number = [0,1,2,3,4,5,6,7,8,9];
  var belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  var modifier = [" puluh", " ratus", " ribu"]
  var result = [];
  // for (var i = 0; i < panjang; i++){
    if (angka > 200){
      var x = Math.floor(angka/100)
      result.push(satuan[x]);
      result.push("ratus");
      angka = angka%100
    } else if (angka > 99){
      result.push("seratus")
      angka -= 100
    }
    if (angka>19){
      var u = Math.floor(angka /10)
      result.push(satuan[u])
      result.push("puluh")
      angka = angka %10
    } else if (angka>9 && angka <20){
      belas = angka-10
      result.push(belasan[belas])
      angka -= angka
    }
    if (angka <10){
      result.push(satuan[angka]);
      angka -= angka
    }
  // }
  return result.join(" ")
}
// Driver code
// console.log(in_words(1000000));
console.log(in_words(5));
console.log(in_words(13));
console.log(in_words(27));
console.log(in_words(182));
console.log(in_words(752));
console.log(in_words(612));
console.log(in_words(999));
// console.log(in_words(38757));
// console.log(in_words(22213717));
