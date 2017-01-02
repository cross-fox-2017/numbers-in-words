function in_words(angka, kalimat="") {
  // Your code here
  angka = angka.toString()
  var panjang = angka.length
  var satuan= ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  var belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  var modifier = ["", "ribu", "juta", "milliar", "triliun"]
  var result = [];
  var simpan = []
//dikelompokkan menjadi 3
  for (var i = 0; i < panjang; i+=3){
    simpan.push(angka.slice(-3))
    angka = angka.slice(0, -3)
  }
  simpan.reverse()
//main logic
    if (simpan[0] > 200){
      var x = Math.floor(simpan[0]/100)
      result.push(satuan[x]);
      result.push("ratus");
      simpan[0] = simpan[0]%100
    } else if (simpan[0] > 99){
      result.push("seratus")
      simpan[0] -= 100
    }
    if (simpan[0]>19){
      var u = Math.floor(simpan[0] /10)
      result.push(satuan[u])
      result.push("puluh")
      simpan[0] = simpan[0] %10
    } else if (simpan[0]>9 && simpan[0] <20){
      belas = simpan[0]-10
      result.push(belasan[belas])
      simpan[0] -= simpan[0]
    }
    if (simpan[0] <10){
      result.push(satuan[simpan[0]]);
      simpan[0] -= simpan[0]
    }
//to be recursived
    kalimat = kalimat + " " + result.join(" ") + " " + modifier[simpan.length-1]
    if (simpan.length < 2){
      return kalimat
    } else {
    simpan.unshift()
    simpan = simpan.join("")
    }
  return in_words(Number(simpan), kalimat)
}
// Driver code
console.log(in_words(1000000));
console.log(in_words(5));
console.log(in_words(13));
console.log(in_words(27));
console.log(in_words(182));
console.log(in_words(752));
console.log(in_words(612));
console.log(in_words(12345678));
console.log(in_words(1000));
console.log(in_words(100));
console.log(in_words(22213717));
