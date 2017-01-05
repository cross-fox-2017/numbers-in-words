"use strict"

function get_first_num(angka) {
  angka = angka.toString();
  return parseInt(angka[0]);
}

function in_words(angka, result) {
  // Your code here
  var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var words = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"]

  if (angka.toString().length == 13) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " triliun ";
    angka = angka - (1000000000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 12) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " ratus ";
    angka = angka - (100000000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 11) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " puluh ";
    angka = angka - (10000000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 10) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " milyar ";
    angka = angka - (1000000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 9) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " ratus ";
    angka = angka - (100000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 8) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " puluh ";
    angka = angka - (10000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 7) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " juta ";
    angka = angka - (1000000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 6) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " ratus ";
    angka = angka - (100000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 5) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " puluh ";
    angka = angka - (10000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 4) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " ribu ";
    angka = angka - (1000*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 3) {
    let angkaPertama = get_first_num(angka);
    result += words[angkaPertama - 1];
    result += " ratus ";
    angka = angka - (100*angkaPertama);
    return in_words(angka, result);
  }
  if (angka.toString().length == 2) {
    let angkaPertama = get_first_num(angka);
    if (angkaPertama == 1) {
      result += words[angka-1];
      return result;
    } else {
      result += words[angkaPertama - 1];
      result += " puluh ";
      angka = angka - (10*angkaPertama);
      return in_words(angka, result);
    }
  }
  if (angka.toString().length == 1) {
    result += words[angka-1];
    return result;
  }
}

// Driver code
// console.log(in_words(1000000));
console.log(in_words(1, ""));
console.log(in_words(12, ""));
console.log(in_words(312, ""));
console.log(in_words(2345, ""));
console.log(in_words(76803, ""));
console.log(in_words(538476, ""));
console.log(in_words(2736094, ""));
console.log(in_words(27360732, ""));
console.log(in_words(297348239, ""));
console.log(in_words(2973482393, ""));
console.log(in_words(29734823912, ""));
console.log(in_words(297348239341, ""));
console.log(in_words(2973482393412, ""));
