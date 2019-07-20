// window.onload=function(){}
let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("userscore");
const computerscore_span=document.getElementById("computerscore");
const scoreboard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("R");
const paper_div=document.getElementById("P");
const scissor_div=document.getElementById("S");
const winlose_id=document.getElementById("winlose");
function getcomputerchoice(){
    const choices=['R','P','S'];
    const rand=Math.floor(Math.random()*3);
   return choices[rand];
}
function conva(letter){
    if (letter =="R") return "ROCK";
    if (letter == "P") return "PAPER";
    if (letter == "S") return "Scissors";
     
}
function win(userchoice,computerchoice){
   userscore++;
   userscore_span.innerHTML=userscore;
   const smalluser="YOU".fontsize(3).sup();
   const smallcomputer="COMPUTER".fontsize(3).sub();
   result_div.innerHTML=conva(userchoice)+smalluser+" Beats "+conva(computerchoice)+smallcomputer;
   winlose_id.innerHTML="YOU WIN :)";
   document.getElementById('winlose').classList.add('green-glow');
   setTimeout(function(){document.getElementById('winlose').classList.remove('green-glow')},300);
}
function lose(userchoice,computerchoice){
   computerscore++;
   computerscore_span.innerHTML=computerscore;
   const smalluser="YOU".fontsize(3).sub();
   const smallcomputer="COMPUTER".fontsize(3).sup();
   result_div.innerHTML=conva(userchoice)+smalluser+" gets beaten by "+conva(computerchoice)+smallcomputer;
   winlose_id.innerHTML="YOU LOSE :(";
   document.getElementById('winlose').classList.add('red-glow');
   setTimeout(function(){document.getElementById('winlose').classList.remove('red-glow')},300);
}
function tie(userchoice,computerchoice){
    const smalluser="YOU".fontsize(3);
   const smallcomputer="COMPUTER".fontsize(3);
    result_div.innerHTML=conva(userchoice)+smalluser+" meets "+conva(computerchoice)+smallcomputer;
    winlose_id.innerHTML="DRAWW !!!";
    document.getElementById('winlose').classList.add('white-glow');
    setTimeout(function(){document.getElementById('winlose').classList.remove('white-glow')},300);
    
    }
function game(userchoice){
    const computerchoice=getcomputerchoice();
  
    switch(userchoice+computerchoice){
        case "RS":
         win(userchoice,computerchoice);
         break;
        case "SP":
        win(userchoice,computerchoice);
         break;
        case "PR":
        win(userchoice,computerchoice);
          break;
        case "RP":
         lose(userchoice,computerchoice);
         break;
        
        case "SR":
        lose(userchoice,computerchoice);
         break;
        
        case "PS":
        lose(userchoice,computerchoice);
         break;
        case "PP":
         tie(userchoice,computerchoice);
         break;
        case "RR":
        tie(userchoice,computerchoice);
          break;
        case "SS":
        tie(userchoice,computerchoice);
           break;
    }    

}
function main(){
rock_div.addEventListener("click", function(){game("R");});
paper_div.addEventListener("click", function(){game("P");});
scissor_div.addEventListener("click", function(){game("S");});

}
main();






