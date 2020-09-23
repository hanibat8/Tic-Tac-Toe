var board, activePlayer,gamePlaying,
    panel, pl0, pl1,
    col1s, col2s, col3s;

init();

function init(){

   board=[0,1,2,3,4,5,6,7,8];
   activePlayer=0;
   gamePlaying=true;
   
   col1s=document.querySelectorAll('.col1');
   col2s=document.querySelectorAll('.col2');
   col3s=document.querySelectorAll('.col3');

   panel=document.querySelector('.panel');
   pl0=document.querySelector('.player0');
   pl1=document.querySelector('.player1');

   col1s.forEach(function(col1){ 
      col1.addEventListener('click',play);
   });

   col2s.forEach(function(col2){ 
      col2.addEventListener('click',play);
   });

   col3s.forEach(function(col3){ 
      col3.addEventListener('click',play);
   });

}

function play(event){

   if(gamePlaying===true){
      if(activePlayer===0 && event.target.innerHTML==false){
         event.target.textContent='x';
         board.splice(Number(event.target.classList[1]),1,event.target.textContent);
         checkWin(event);
         activePlayer=1;
     }
     else if(activePlayer===1 && event.target.innerHTML==false){
         event.target.textContent='o';
         board.splice(Number(event.target.classList[1]),1,event.target.textContent);
         checkWin(event);
         activePlayer=0;
     }
   }

}

function checkWin(event){

   if(gamePlaying===true){
      checkHorizontal(event);
      checkVertical(event);
      checkDiagonal(event);
   }

}

function checkHorizontal(event){
   
   if(board[0]===board[1] && board[1]===board[2]){
      displayWin(event);
   }
   else if(board[3]===board[4] && board[4]===board[5]){
      displayWin(event);
   }
   else if(board[6]===board[7] && board[7]===board[8]){
      displayWin(event);
   }
  
}

function checkVertical(event){
   
   if(board[0]===board[3] && board[3]===board[6]){
      displayWin();
   }
   else if(board[1]===board[4] && board[4]===board[7]){
      displayWin();
   }
   else if(board[2]===board[5] && board[5]===board[8]){
      displayWin();
   }
  
}

function checkDiagonal(event){
   
   if(board[0]===board[4] && board[4]===board[8]){
      displayWin(event);
   }
   else if(board[2]===board[4] && board[4]===board[6]){
      displayWin(event);
   }

}

function displayWin(event){
   
   gamePlaying=false;
   panel.classList='panel active';
   
   if(activePlayer===0){
      pl0.classList='player0 active';
   }
   else{
      pl1.classList='player1 active';
   }

}

function strikeThrough(){
   
}