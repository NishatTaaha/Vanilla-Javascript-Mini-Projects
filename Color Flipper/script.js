 const change= document.getElementById("change");
 const color= document.getElementById("color");
 const body= document.body;

change.addEventListener('click',changeBG);
 function changeBG(){
     const color1= getRandom();
     const color2= getRandom();
     const color3= getRandom();

     const colorString= `rgb(${color1},${color2},${color3})`;
     body.style.background= colorString;
     color.innerText= colorString;

 }

 function getRandom(){
     return Math.floor(Math.random()*256);
 }

