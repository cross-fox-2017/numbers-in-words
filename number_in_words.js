function rec(angka){
      var satuan = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
      var tambah =['sebelas,dua belas,tiga belas,empat belas,lima belas, enam belas, tujuh belas,delapan belas, sembilan belas']
      var str = angka.toString();
      var res = '';
      var num = 1;

      if(str.length === 1){
      if(angka!== 0){
        res += satuan[str[0]-1];
      }
      num = angka;
      }

      else if(str.length === 2){
        res += satuan[str[0]-1] + ' puluh ';
        num = parseInt(str[0]) * 10;
      }

      else if(str.length === 3){
        res += satuan[str[0]-1] + ' ratus ';
        num = parseInt(str[0]) * 100;
      }

      else if (str.length === 4) {
        res += satuan[str[0]-1] + ' ribu '
        num = parseInt(str[0] * 1000)
      }

      else if (str.length === 5) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' puluh ribu '
        }
        else{
          res += satuan[str[0]-1] + ' puluh '
        }
        num = parseInt(str[0] * 10000)
      }

      else if (str.length === 6) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' ratus ribu '
        }
        else{
          res += satuan[str[0]-1] + ' ratus '
        }
        num = parseInt(str[0] * 100000)
      }

      else if (str.length === 7) {
        res += satuan[str[0]-1] + ' juta '
        num = parseInt(str[0] * 1000000)
      }

      else if (str.length === 8) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + 'puluh juta'
        }
        else{
          res += satuan[str[0]-1] + ' puluh  '
        }
        num = parseInt(str[0] * 10000000)
      }

      else if (str.length === 9) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' ratus juta '
        }
        else{
          res += satuan[str[0]-1] + ' ratus  '
        }
        num = parseInt(str[0] * 100000000)
      }

      else if (str.length === 10) {
        res += satuan[str[0]-1] + ' milyar '
        num = parseInt(str[0] * 1000000000)
      }

      else if (str.length === 11) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' puluh milyar '
        }
        else{
          res += satuan[str[0]-1] + ' puluh '
        }
        num = parseInt(str[0] * 10000000000)
      }

      else if (str.length === 12) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' ratus milyar '
        }
        else{
          res += satuan[str[0]-1] + ' ratus '
        }
        num = parseInt(str[0] * 100000000000)
      }

      else if (str.length === 13) {

        res += satuan[str[0]-1] + ' triliun '
        num = parseInt(str[0] * 1000000000000)
      }

      else if (str.length === 14) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + 'puluh triliun'
        }
        else{
          res += satuan[str[0]-1] + ' puluh '
        }
        num = parseInt(str[0] * 10000000000000)
      }

      else if (str.length === 15) {
        if(str[1]==='0' && str[2]==='0'){
            res += satuan[str[0]-1] + ' ratus triliun '
        }
        else{
        res += satuan[str[0]-1] + ' ratus '
        }
        num = parseInt(str[0] * 100000000000000)
      }

      if(angka > 0) {
        return (res + rec(angka - num));
      }else{

        return res
      }

}
// Driver code
console.log(rec(999999000000000));
