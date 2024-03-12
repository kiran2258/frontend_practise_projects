let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        const userchoice=choice.getAttribute("id");
        console.log( "choice was clicked",userchoice);
    });
    });