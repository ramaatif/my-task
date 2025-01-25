

function rangeDisplay(x,y,z)
{
    if(x>y)
    {
      [x,y] =[y,x];
    }
    if(z!== "odd" && z!== "even" && z!== "no")
    {
     console.log("Invalid value  Use 'odd', 'even', or 'no'.")
     return;
    }

    let range=[];
    var sum =0;
    for (let index =x; index<=y; index++) 
      {
      if(z==="even" && index%2 === 0)
      {
         range.push(index)
          sum = range.reduce((acc, num) => acc + num, 0);
        }
      else if (z=== "odd" && index%2 !== 0)
      {
          range.push(index)
          sum = range.reduce((acc, num) => acc + num, 0);

      }
       else if(z=== "no")
       {
            range.push(index)
            sum = range.reduce((acc, num) => acc + num, 0);

       }

    }
    console.log(`Range between ${x} and ${y} (${z} numbers):`);
    console.log(range.join(","))
    console.log(sum)


}
rangeDisplay(1,10,"even")
rangeDisplay(1,10,"odd")
rangeDisplay(1,10,"no")
rangeDisplay(1,10,"ay7aga")




