var randomNumber1=1;
var randomNumber2=1;

var randomDiceImage= "images/dice"+randomNumber1+ ".png";
var randomDiceImage2= "images/dice"+randomNumber2+ ".png";
const btn= document.getElementById("btn");


function genRandNum1(){
    return   Math.floor(Math.random()*6) + 1;
   };
function genRandNum2(){
       return   Math.floor(Math.random()*6) + 1;
      };
btn.addEventListener("click",function(){
     randomNumber1=genRandNum1();
     randomNumber2=genRandNum2();
     randomDiceImage= "images/dice"+randomNumber1+ ".png";
     randomDiceImage2= "images/dice"+randomNumber2+ ".png";

    document.querySelector(".img1").setAttribute("src",randomDiceImage);
    document.querySelector(".img2").setAttribute("src",randomDiceImage2);

   printWhoWins(randomNumber1,randomNumber2);
  
});


function printWhoWins(randomNumber1,randomNumber2){
    
    if(randomNumber1==randomNumber2){
       
        return document.querySelector("h1").innerHTML=" Match Draw! ";
    }
    else if(randomNumber1>randomNumber2){
        
        return document.querySelector("h1").innerHTML="Player 1 Wins !";
    }
    else{
        
        return document.querySelector("h1").innerHTML="Player 2 Wins !";
    }
}
