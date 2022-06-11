var gameover=false;
var placeX=true;

function SetNames(){
	const first = document.getElementById("fname").value;
	const second = document.getElementById("sname").value;
  var player1name = localStorage.setItem('player1name',first);
  var player2name = localStorage.setItem('player2name',second);
  window.open("tictac.html");
}
function TClick(elid){
  const eid='#'+elid;
	const gridt = document.querySelector(eid);
  if((gridt.innerHTML!='X'||gridt.innerHTML!='O')&&gameover!=true){
  	if(placeX==true){
    	 gridt.innerHTML='X';
       placeX=false;
       var player2name=localStorage.getItem('player2name');
       document.querySelector('#turn').innerHTML=(player2name+'s turn');
    }
    else{
    		gridt.innerHTML='O';
        placeX=true;
        var player1name=localStorage.getItem('player1name');
        document.querySelector('#turn').innerHTML=(player1name+'s turn');
    }
    checkgameover();
  }
}
function checkgameover(){
  var isallfull=true;
  var player1won=localStorage.getItem('player1name')+' Won';
  var player2won=localStorage.getItem('player2name')+' Won';
	const b1 = document.querySelector('#first').innerHTML;
	const b2 = document.querySelector('#second').innerHTML;
	const b3 = document.querySelector('#third').innerHTML;
	const b4 = document.querySelector('#fourth').innerHTML;
	const b5 = document.querySelector('#fifth').innerHTML;
	const b6 = document.querySelector('#sixth').innerHTML;
	const b7 = document.querySelector('#seventh').innerHTML;
	const b8 = document.querySelector('#eighth').innerHTML;
	const b9 = document.querySelector('#nineth').innerHTML;
  const arr=[b1,b2,b3,b4,b5,b6,b7,b8,b9];

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        gameover=true;
        window.alert(player1won);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        gameover=true;

        window.alert(player1won);
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        gameover=true;

        window.alert(player1won);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        gameover=true;

        window.alert(player1won);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        gameover=true;

        window.alert(player1won);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        gameover=true;

        window.alert(player1won);
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        gameover=true;
        window.alert(player1won);
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
          gameover=true;

        window.alert(player1won);
    }
 
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
          gameover=true;

        window.alert(player2won);
    }
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
          gameover=true;

        window.alert(player2won);
    }
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
          gameover=true;

          window.alert(player2won);
        }
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
          gameover=true;

          window.alert(player2won);
        }
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
          gameover=true;

          window.alert(player2won);
        }
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
          gameover=true;
          window.alert(player2won);
        }
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
          gameover=true;

          window.alert(player2won);
        }
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
          gameover=true;
          window.alert(player2won);
        }

  arr.forEach(e => {
    if(e==''){
      isallfull=false;
    }
  });
  if(isallfull==true){window.alert('Tie');}
}