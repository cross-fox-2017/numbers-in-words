function get_first_num(nilai){
  nilai = nilai.toString()
  return parseInt(nilai[0]);
}
let kalimat = ""

function million(nilai){

  if(nilai.toString().length <= 3){
    return in_word(nilai)
  }
  else if(nilai.toString().length > 3 && nilai.toString().length < 7){
    let nilaiString = nilai.toString();
    if(nilaiString.length == 6){
      var temp1 = in_words(nilaiString.slice(0,3))
      kalimat = ""
      var temp2 = in_words(nilaiString.slice(3,6))
    return temp1 +" ribu " + temp2;
    }
    else if (nilaiString.length == 5){
      var temp1 = in_words(nilaiString.slice(0,2))
      kalimat = ""
      var temp2 = in_words(nilaiString.slice(2,5))
    return temp1 +" ribu " + temp2;
    }
    else if (nilaiString.length == 4){
      var temp1 = in_words(nilaiString.slice(0,1))
      kalimat = ""
      var temp2 = in_words(nilaiString.slice(1,4))
    return temp1 +" ribu " + temp2;
    }
    }
    else if(nilai.toString().length > 6 && nilai.toString().length < 10){
      let nilaiString = nilai.toString();
      if(nilaiString.length == 9){
        var temp1 = in_words(nilaiString.slice(0,3))
        kalimat = ""
        var temp2 = in_words(nilaiString.slice(3,6))
        kalimat = ""
        var temp3 = in_words(nilaiString.slice(6,9))
      return temp1 +" juta " + temp2 + " ribu " + temp3;
      }
      else if (nilaiString.length == 8){
        var temp1 = in_words(nilaiString.slice(0,2))
        kalimat = ""
        var temp2 = in_words(nilaiString.slice(2,5))
        kalimat = ""
        var temp3 = in_words(nilaiString.slice(5,8))
        return temp1 +" juta " + temp2 + " ribu " + temp3;
      }
      else if (nilaiString.length == 7){
        var temp1 = in_words(nilaiString.slice(0,1))
        kalimat = ""
        var temp2 = in_words(nilaiString.slice(1,4))
        kalimat = ""
        var temp3 = in_words(nilaiString.slice(4,7))
        return temp1 +" juta " + temp2 + " ribu " + temp3;
      }
      }
      else if(nilai.toString().length > 9 && nilai.toString().length < 13){
        let nilaiString = nilai.toString();
        if(nilaiString.length == 12){
          var temp1 = in_words(nilaiString.slice(0,3))
          kalimat = ""
          var temp2 = in_words(nilaiString.slice(3,6))
          kalimat = ""
          var temp3 = in_words(nilaiString.slice(6,9))
          kalimat = ""
          var temp4 = in_words(nilaiString.slice(9,12))
        return temp1 +" milyar " + temp2 + " juta " + temp3 + " ribu " + temp4;
        }
        else if (nilaiString.length == 11){
          var temp1 = in_words(nilaiString.slice(0,2))
          kalimat = ""
          var temp2 = in_words(nilaiString.slice(2,5))
          kalimat = ""
          var temp3 = in_words(nilaiString.slice(5,8))
          kalimat = ""
          var temp4 = in_words(nilaiString.slice(8,11))
        return temp1 +" milyar " + temp2 + " juta " + temp3 + " ribu " + temp4;
        }
        else if (nilaiString.length == 10){
          var temp1 = in_words(nilaiString.slice(0,1))
          kalimat = ""
          var temp2 = in_words(nilaiString.slice(1,5))
          kalimat = ""
          var temp3 = in_words(nilaiString.slice(5,8))
          kalimat = ""
          var temp4 = in_words(nilaiString.slice(8,11))
        return temp1 +" milyar " + temp2 + " juta " + temp3 + " ribu " + temp4;
        }
        }
        else if(nilai.toString().length > 12 && nilai.toString().length < 16){
          let nilaiString = nilai.toString();
          if(nilaiString.length == 15){
            var temp1 = in_words(nilaiString.slice(0,3))
            kalimat = ""
            var temp2 = in_words(nilaiString.slice(3,6))
            kalimat = ""
            var temp3 = in_words(nilaiString.slice(6,9))
            kalimat = ""
            var temp4 = in_words(nilaiString.slice(9,12))
            kalimat = ""
            var temp5 = in_words(nilaiString.slice(12,15))
          return temp1 + " triliun "+ temp2 +" milyar " + temp3 + " juta " + temp4 + " ribu " + temp5
          }
          else if (nilaiString.length == 14){
            var temp1 = in_words(nilaiString.slice(0,2))
            kalimat = ""
            var temp2 = in_words(nilaiString.slice(2,5))
            kalimat = ""
            var temp3 = in_words(nilaiString.slice(5,8))
            kalimat = ""
            var temp4 = in_words(nilaiString.slice(8,11))
            kalimat = ""
            var temp5 = in_words(nilaiString.slice(11,14))
          return temp1 + " triliun "+ temp2 +" milyar " + temp3 + " juta " + temp4 + " ribu " + temp5
          }
          else if (nilaiString.length == 13){
            var temp1 = in_words(nilaiString.slice(0,1))
            kalimat = ""
            var temp2 = in_words(nilaiString.slice(1,4))
            kalimat = ""
            var temp3 = in_words(nilaiString.slice(4,7))
            kalimat = ""
            var temp4 = in_words(nilaiString.slice(7,10))
            kalimat = ""
            var temp5 = in_words(nilaiString.slice(10,13))
          return temp1 + " triliun "+ temp2 +" milyar " + temp3 + " juta " + temp4 + " ribu " + temp5
          }
          }

  }



function in_words(nilai) {

  var bilangan    = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var terbilang = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas","dua belas", "tiga belas", "empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];

  if(nilai.toString().length == 3){
    let firstnum = get_first_num(nilai);
    kalimat += terbilang[firstnum - 1]
    kalimat += " ratus "
    nilai = nilai - (100*firstnum)
    return in_words(nilai);

  }
  else if(nilai.toString().length == 2){
    if(nilai < 20){
      kalimat += terbilang[nilai-1]
      nilai = nilai - nilai;
      return kalimat

    } else if(nilai >= 20) {
      let firstnum = get_first_num(nilai);
      kalimat += terbilang[firstnum - 1]
      kalimat += " puluh "
      nilai = nilai - (10*firstnum)
      return in_words(nilai);
    }
  }
  else if(nilai.toString().length == 1){
    kalimat += terbilang[nilai - 1]
    return kalimat;
  }
}


// Driver code
console.log(million(912912912912512));
