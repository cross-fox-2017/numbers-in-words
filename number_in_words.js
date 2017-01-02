function in_words(angka) {
  var satuan=['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  var angkasusah=['sepuluh','sebelas','seratus'];
  var result='';
  var str= angka.toString();
  for (var i = 0; i < angka; i++) {
    if(str.length===1){
      result= satuan[i];
    }
    else if (str.length===2) {

      if (angka===10) {
        result= angkasusah[0];
      }
      else if (angka===11) {
        result= angkasusah[1];
      }
      else if(angka%10===0){
        result= satuan[str[0]-1] + ' puluh';
      }
      else if(str[0]==='1'){
        result=satuan[str[1]-1] + ' belas';
      }
      else {
        result= satuan[str[0]-1] +' puluh '+ satuan[str[1]-1];
      }
    }
   else if(str.length===3){
     if (angka===100) {
       result= angkasusah[2];
     }
     else if (str[1]+str[2]==='11') {
       if (str[0]==='1') {
         result= angkasusah[2]+' '+angkasusah[1];
       }
       else{
       result= satuan[str[0]-1]+' ratus '+ angkasusah[1];
       }
     }
     else if(angka%100===0){
       result= satuan[str[0]-1] + ' ratus';
     }
     else if(str[1]==='1'){
       result= satuan[str[0]-1]+' ratus '+satuan[str[2]-1] + ' belas';
     }
     else {
       result= satuan[str[0]-1] +' puluh '+ satuan[str[1]-1];
     }
   }
  }
  return result;
}

// function rec(angka){
//     var satuan = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
//     var str = angka.toString();
//     var res = '';
//     var num = 1;
//     if(str.length === 1){
//       if(angka!== 0){
//         res += satuan[str[0]-1];
//       }
//       num = angka;
//     }
//     else if(str.length === 2){
//       res += satuan[str[0]-1] + ' puluh ';
//       num = parseInt(str[0]) *10;
//     }
//     else if(str.length === 3){
//       res += satuan[str[0]-1] + 'ratus ';
//       num = parseInt(str[0]) *100;
//     }else if (str.length === 4) {
//       res += satuan[str[0]-1] + 'ribu '
//       num = parseInt(str[0] * 1000)
//     }
//     else if (str.length === 5) {
//       res += satuan[str[0]-1] + ' puluhribu '
//       num = parseInt(str[0] * 10000)
//     }
//
//     if(angka > 0) {
//       return (res + rec(angka - num));
//     }else{
//       return res;
//     }
//
//
//
// }

// Driver code
console.log(in_words(123));
// console.log(rec(90201));
