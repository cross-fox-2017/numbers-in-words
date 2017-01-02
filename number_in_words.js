function in_words(angka) {

  var num = angka.toString().split("");
  var numMap = [0,1,2,3,4,5,6,7,8,9];
  var alphabetMap = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','se'];
  var alphaPuluhan = ["belas","puluh","ratus","ribu","juta"];
  var result = "";


  for(var i = 0;i< num.length;i++){

    for(var j=0; j< numMap.length;j++){

      if(numMap[j] == num[i] ){
        result += alphabetMap[j];
        console.log(i);

      }
    }
  }
//nominal
//while decr
for(var c = num.length-1; c >= 0 ;c--){
  var nominal = 1;
  switch(nominal){
    case 1: result[c] += "puluh";break;
    case 2: result[c] += "ratus";break;
    case 3: result[c] += "ribu"; break;
    case 4: result[c] += "juta"; break;
  }



return result;
  // Your code here
}

// Driver code
console.log(in_words(22));
