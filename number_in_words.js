function in_words(angka) {

  var num = angka.toString().split("");
  var numMap = [0,1,2,3,4,5,6,7,8,9];
  var alphabetMap = ['','','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','se'];
  var alphaPuluhan = ["belas","puluh","ratus","ribu","juta"];
  var result = "";
  var max = num.length;
  var count = 1;

  for(var i = 0;i< num.length;i++){

    for(var j=0; j< numMap.length;j++){

      if(numMap[j] == num[i] && num[i] ){
      // console.log(num[num.length-1]);
        if(num[i] === 1){ result += "se";}
        else if(num[i] === 0){break;}

        else{
        result += alphabetMap[j];
      }

        if(max === 7 && count === 1 ){ if(num[i] ==1){ result += "se";} result += " juta  "; count = 0; max--;}
        if(max === 6 && count === 1 ){ if(num[i]!=0){ if(num[i] ==1){ result += "se";} result += " ratus  ";} count = 0; max--;}
        if(max === 5 && count === 1 ){if(num[i] != 1 && num[i] != 0){ result += " puluh  ";} count = 0; max--;}
        if(max === 4 && count === 1 ){ if(num[i]!=0)

          { if(num[i] ==1){

          if(num[i] ==1 && num[num.length -5] != 1){ result += "satu";}
          else if(num[i] == 1){result += "se";};
          if(num[num.length - 5] == 1){
          result += " belas " ;}
        }

           result += " ribu  ";} count = 0; max--;

         }
        if(max === 3 && count === 1 ){ if(num[i]!=0){if(num[i] ==1){ result += "se";} result += " ratus ";} count = 0;max--;}
        if(max === 2 && count === 1 ){ if(num[i] != 1 && num[i]!= 0){ result += " puluh ";} count = 0;max--;}

        if(max === 1 && count === 1 ){
          if(num[i] ==1 && num[num.length -2] != 1){ result += "satu";}
          else if(num[i] == 1){result += "se";};
          if(num[num.length - 2] == 1){
          result += " belas " ;}
           count = 0;max--;}


      }
      count =1;
    }
  }
//nominal
//while decr



return result;
  // Your code here
}

// Driver code

console.log(in_words(3111121));
