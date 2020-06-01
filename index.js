var randomnumber=Math.random();
randomnumber=randomnumber*6;
randomnumber=Math.floor(randomnumber)+1;
var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;
var path ="images/dice"+randomnumber+".png";
var path1 ="images/dice"+randomnumber1+".png";

document.querySelector(".img1").setAttribute("src",path);
document.querySelector(".img2").setAttribute("src",path1);

if(randomnumber>randomnumber1)
document.querySelector("h1").innerText="Player one wins";
else if(randomnumber<randomnumber1)
document.querySelector("h1").innerText="Player two wins";
else
document.querySelector("h1").innerText="Draw";
