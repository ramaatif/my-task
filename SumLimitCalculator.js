var sum =0;
for (let index = 0; sum < 100; index++) 
{
   var input = prompt("Enter Your Number")
   var number = parseInt(input)
   if (isNaN(number)) 
   {
       alert("Invalid Input Please Enter Only Numeric Numbers");
       continue;
   }
   if (number === 0 || sum + number > 100) 
   {
       console.log("Stopping input,Final sum: " + sum);
       break; 
//  or use   alert("Invalid Input PLease enter A Numeric Values")
//        continue;
   }

   sum = sum +number;
   console.log(sum);

console.log("Total Sum Of Entered Values :"+sum);
}
