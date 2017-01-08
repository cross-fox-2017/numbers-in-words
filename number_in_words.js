// console.log(in_words(4));
// console.log(in_words(12));
// console.log(in_words(120));
// console.log(in_words(3111));
// console.log(in_words(38079));
// console.log(in_words(138227));
// console.log(in_words(1000000));
// console.log(in_words(10000000));
// console.log(in_words(82102713));
// console.log(in_words(123123123123));
// console.log(in_words(123123123123123));

function in_words(angka, result = [], result2 = []) {
  // Your code here
  let tampung = angka.toString();
  let strings = tampung.split("");
  let satuan = ["RIBU", "JUTA", "MILIAR", "TRILIUN"];

  if (strings[0] == "0") {
    if (strings.length > 1) {
      strings.splice(0,1);
      let tam = strings.join("");
      return in_words(tam, result);
    }
    else {
      return result.join(" ");
    }
  }

  if (strings[0] == "1") {
    result.push("SE");
    if (strings.length == 1) {
      result.pop();
      result.push("SATU");
      return result.join(" ");
    }
    if (strings[1] == "1" && strings.length == 2) {
      result.pop();
      result.push("SEBELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "2" && strings.length == 2) {
      result.pop();
      result.push("DUA BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "3" && strings.length == 2) {
      result.pop();
      result.push("TIGA BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "4" && strings.length == 2) {
      result.pop();
      result.push("EMPAT BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "5" && strings.length == 2) {
      result.pop();
      result.push("LIMA BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "6" && strings.length == 2) {
      result.pop();
      result.push("ENAM BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "7" && strings.length == 2) {
      result.pop();
      result.push("TUJUH BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "8" && strings.length == 2) {
      result.pop();
      result.push("DELAPAN BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
    if (strings[1] == "9" && strings.length == 2) {
      result.pop();
      result.push("SEMBILAN BELAS");
      if (strings.length == 2) {
        return result.join(" ");
      }
    }
  }
  else if (strings[0] == "2") {
    result.push("DUA");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "3") {
    result.push("TIGA");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "4") {
    result.push("EMPAT");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "5") {
    result.push("LIMA");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "6") {
    result.push("ENAM");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "7") {
    result.push("TUJUH");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "8") {
    result.push("DELAPAN");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }
  else if (strings[0] == "9") {
    result.push("SEMBILAN");
    if (strings.length == 1) {
      return result.join(" ");
    }
  }

  if (strings.length == 2) {
    result.push("PULUH");
    strings.splice(0,1);
    let tam = strings.join("");
    return in_words(tam, result);
  }
  if (strings.length == 3) {
    result.push("RATUS");
    strings.splice(0,1);
    let tam = strings.join("");
    return in_words(tam, result);
  }
  for (let i = 4, j = 0; i <= strings.length, j < 3; i+=3, j++) {
    if (strings.length = i) {
      let index = j+1; // 1,2,3,4,5,6,dst
      let belakang = tampung.substr(index, i-j);
      // console.log(strings.length);
      // console.log(i);
      // console.log(tampung);
      // console.log(strings);
      // console.log(strings.length);
      console.log(belakang);
      result.push(satuan[j]);
      in_words(belakang, result);
      // strings.splice(0,1);
      return result.join(" ");
    }
  }

}

// Driver code

console.log(in_words(4));
console.log(in_words(12));
console.log(in_words(120));
console.log(in_words(3111));
console.log(in_words(38079));
console.log(in_words(138227));
console.log(in_words(1000000));
console.log(in_words(10000000));
console.log(in_words(82102713));
// console.log(in_words(123123123123));
// console.log(in_words(123123123123123));
