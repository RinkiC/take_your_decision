var randomnumber1;
randomnumber1=Math.floor(Math.random()*6+1);
console.log(randomnumber1);

var randomnumber2;
randomnumber2=Math.floor(Math.random()*6+1);
console.log(randomnumber2);

var imgstring="images/dice"+randomnumber1+".png";
var imgstring1="images/dice"+randomnumber2+".png";

document.getElementById("img1").setAttribute("src", imgstring);
document.getElementById("img2").setAttribute("src", imgstring1);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}


