function CheckDivisiblityUserInputs(x,y,z)
{

   if(x%y== 0 && x%z== 0)
   {   
console.log(`${x} Is Divisible By Both ${y} and ${z}`)
   }
   
   else if(x%y == 0)
  {
    console.log(`${x} Is Divisible By ${y} only`)
  }
   else if(x%z==0)
   {
    console.log(`${x} Is Divisible By ${z} only`)
   }
   else 
  {
    console.log(`${x} is not divisible by either ${y} or ${z}`);
  }
   
}
CheckDivisiblityUserInputs(10,4,2)
CheckDivisiblityUserInputs(10,5,2)
CheckDivisiblityUserInputs(10,4,5)
CheckDivisiblityUserInputs(5,4,2)