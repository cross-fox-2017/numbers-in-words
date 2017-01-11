function in_word(input)
{
  var convertAngka = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];

  if (input < 12){
    return " "+convertAngka[input];
  }
  else if (input < 20){
    return in_word(input - 10)+" belas";
  }
  else if (input < 100){
    return in_word(input / 10)+" puluh"+in_word(input % 10);
  }
  else if (input < 200){
    return " seratus"+in_word(input - 100);
  }
  else if (input < 1000){
    return in_word(input / 100)+" ratus"+in_word(input % 100);
  }
  else if (input < 2000){
    return " seribu"+in_word(input - 1000);
  }
  else if (input < 1000000){
    return in_word(input / 1000)+" ribu"+in_word(input % 1000);
  }
  else if (input < 1000000000){
    return in_word(input / 1000000)+" juta"+in_word(input % 1000000);
  }
}

// Driver code
console.log(in_word(9));
console.log(in_word(11));
console.log(in_word(24));
console.log(in_word(549));
console.log(in_word(789));
console.log(in_word(907));
console.log(in_word(23101));
console.log(in_word(16111987));
console.log(in_word(999000000000000));
