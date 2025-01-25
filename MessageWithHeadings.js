
var message = prompt("Enter Your Name","No Name")
document.write("<h2>Heading</h2>")
document.write("<hr>")


for (let index = 1; index <= 6; index++) 
 {
    let msg = message +index;
    document.write("<h" + index +">"+msg+"</h" +index+">");
 }
// ////////////////////////////////////////////////////////////////////
// using method to create header

// function CreatHeader(HeaderText,Level)
// {
//    const Header = document.createElement("h"+Level);
//    Header.textContent= HeaderText;
//    document.body.appendChild(Header);
// }
// const H= document.createElement("h2");
// H.textContent="Heading";
// document.body.appendChild(H);

// const HR= document.createElement("hr");
// document.body.appendChild(HR);

// var msg =prompt("Enter A Message","Empty")
// for (let index = 1; index <=6; index++) 
// {
//    // CreatHeader(msg+index,index)
//    document.write(`<h${index}>${msg}${index}</h${index}>`);   
// } 

// ////////////////////////////////////////////////////////////////////
// using method but i called the method without loops
// function CreatHeader(HeaderText,Level)
// {
    
//     const Header= document.createElement(`h${Level}`)
//     Header.textContent=HeaderText+Level;
//     document.body.appendChild(Header)
    
// }
// const heading = document.createElement("h2")
//     heading.textContent="Heading";
//     document.body.appendChild(heading);
//     const HR=document.createElement("hr")
//     document.body.appendChild(HR);
//     var message=prompt("Enter A Message","Empty")
//     CreatHeader(message,1)
//     CreatHeader(message,2)
//     CreatHeader(message,3)
//     CreatHeader(message,4)
//     CreatHeader(message,5)
//     CreatHeader(message,6)