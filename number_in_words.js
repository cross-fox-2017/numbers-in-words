// Function ini berfungsi untuk meng convert angka rupiah menjadi tulisan rupiah.
// parameter function, dirubah menjadi string agar bisa mengambil digit pertama nya.
// digit pertama akan di cocokkan dengan case switch.
//
// Lalu jumlah digit angka, menjadi penentu kategori ratusan, puluhan, ribuaan, dll.
// angka akan dikurangi (digit_pertama * satuan_rupiah);

function in_words(angka) {
  var tampung = "",
      digit = String(angka);

switch (digit[0]) {
  case "1":
    tampung += "satu ";
    break;
  case "2":
    tampung += "dua ";
    break;
  case "3":
    tampung += "tiga ";
    break;
  case "4":
    tampung += "empat ";
    break;
  case "5":
    tampung += "lima ";
    break;
  case "6":
    tampung += "enam ";
    break;
  case "7":
    tampung += "tujuh ";
    break;
  case "8":
    tampung += "delapan ";
    break;
  case "9":
    tampung += "sembilan ";
    break;
  }

      if (angka > 0) {
        if ( digit.length == 1 ) {
          angka = angka - (digit[0] * 1);
        }

        // 10 puluhan
        if ( digit.length == 2 ) {
          angka = angka - (digit[0] * 10);
          tampung += "puluh ";
        }

        // 100 ratusan
        if ( digit.length == 3 ) {
          angka = angka - (digit[0] * 100);
          tampung += "ratus ";
        }

        // 1.000 ribuan
         if  ( digit.length == 4 ) {
          angka = angka - (digit[0] * 1000);
          tampung += "ribu ";
        }

        // 10.000 puluhan ribu
        if ( digit.length == 5 ) {
          angka = angka - (digit[0] * 10000);
          tampung += "puluh ribu ";
        }

        // 100.000 ratusan ribu
        if ( digit.length == 6 ) {
          angka = angka - (digit[0] * 100000);
          tampung += "ratus ribu ";
        }

        // 1.000.000 juta
        if ( digit.length == 7 ) {
          angka = angka - (digit[0] * 100000);
          tampung += "juta ";
        }

        // 10.000.000 puluh juta
        if ( digit.length == 8 ) {
          console.log('-- angka 8')
          angka = angka - (digit[0] * 100000);
          tampung += "puluh juta ";
        }

        // 100.000.000 ratus juta
        if ( digit.length == 9) {
          angka = angka - (digit[0] * 100000000 );
          tampung += "ratus juta ";
        }

        // 1.000.000.000 milyard
        if (digit.length  == 10) {
          angka = angka - (digit[0] * 1000000000);
          tampung += "milyard "
        }

        // 10.000.000.000 puluh milyad
        if (digit.length == 11) {
          angka = angka - (digit[0] * 10000000000);
          tampung += "puluh milyard "
        }

        // 100.000.000.000 ratus milyard
        if (digit.length == 12) {
          angka = angka - (digit[0] * 100000000000 );
          tampung += "ratus milyard ";
        }

        // 1.000.000.000.000 triliyun
        if (digit.length == 13) {
          angka = angka - (digit[0] * 1000000000000);
          tampung += "triliyun ";
        }

        // 10.000.000.000.000 puluh triliyun
        if (digit.length == 14) {
          angka = angka - (digit[0] * 10000000000000);
          tampung += "puluh triliyun ";
        }

        // 100.000.000.000.000 ratus triliyun
        if (digit.length == 15) {
          angka = angka - (digit[0] * 100000000000000);
          tampung += "ratus triliyun ";
        }

        // panggil ulang function
        return tampung + in_words(angka);

      } else {
        return tampung;
      }
}


// Driver code
console.log(in_words(150000000));
