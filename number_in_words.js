function in_words(angka) {

  var len = angka.toString().length;
  var arr = angka.toString().split("");
  var result = [];
  var compare = ['DUA','TIGA','EMPAT','LIMA','ENAM','TUJUH','DELAPAN','SEMBILAN'];

  if(arr[0] === "1")
     {
       result.push("SERATUS");
     }

   for(var x = 0; x < len;x++)
     {


       if(arr[x] === "2")
         {
           result.push("DUA");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }

       if(arr[x] === "3")
         {
           result.push("TIGA");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "4")
         {
           result.push("EMPAT");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "5")
         {
           result.push("LIMA");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "6")
         {
           result.push("ENAM");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "7")
         {
           result.push("TUJUH");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "8")
         {
           result.push("DELAPAN");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }
       if(arr[x] === "9")
         {
           result.push("SEMBILAN");

           if(x == 0)
             {
               result.push("RATUS");
             }

           if(x == 1)
             {
               result.push("PULUH");
             }
         }

     }

    if(arr[1] == "1" && arr[2] > 1)
     {
       result.push("BELAS");
     }
   if(arr[1] === "1" && arr[2] === "0")
     {
       result.push("SEPULUH");
     }

   if(arr[1] === "1" && arr[2] === "1")
     {
       result.push("SEBELAS");
     }
   if(arr[2] === "1" && arr[1] !== "1")
     {
       result.push("SATU");
     }
  return result;
  // Your code here
}

// Driver code
console.log(in_words(491));
