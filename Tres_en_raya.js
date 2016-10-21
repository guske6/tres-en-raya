class TresEnRaya{
	constructor(tab=[[0,0,0],[0,0,0],[0,0,0]], victory = false){
		this.tab = tab;
		this.victory = victory;
	}
	
	gameStart(){
		/* function that start the game */
		var player1 = 1;
		var player2 = -1;
		var selectedPlayer = 0;
		
		do {
			var ini = parseInt (prompt("Select the first player (1) or (2):"));
			if (ini == 1){
				selectedPlayer = player1;
			}
			else if (ini == 2){
				selectedPlayer = player2;
			}
			else{
				alert ("The player does't sexist");
			}
		} while (ini != 1 && ini != 2);
		
		while (this.victory == false) {
			this.askmove(selectedPlayer); /* funcion para preguntar posiciones */

			if (selectedPlayer == 1){
				console.log("Player 2");
				selectedPlayer = player2;
			} 
			else{
				selectedPlayer = player1;
				console.log("Player 1");
			}
			
			this.victorySearch(); /* función para comprobar si la partida está ganada */
		}
		if (selectedPlayer == 1){
			console.log("Player 1 win");
		} 
		else{
			console.log("Player 2 win");
		}
	}
	
	askmove(player){
		/* funcion para preguntar posiciones */
		var movec = prompt("Select column(1, 2 or 3): ");
		var mover = prompt("Select row(1, 2 or 3): ");
		if (this.tab[movec-1][mover-1] == 1 || this.tab[movec-1][mover-1] == -1){
			console.log("La casilla ya esta marcada, indique otra")
			this.askmove(player);
		}
		this.tab[movec-1][mover-1] = player;
	}

	victorySearch(){
		if (this.tab[0][0]+this.tab[0][1]+this.tab[0][2] == 3 || this.tab[0][0]+this.tab[0][1]+this.tab[0][2] == -3){ this.victory = true }
		if (this.tab[1][0]+this.tab[1][1]+this.tab[1][2] == 3 || this.tab[1][0]+this.tab[1][1]+this.tab[1][2] == -3){ this.victory = true }
		if (this.tab[2][0]+this.tab[2][1]+this.tab[2][2] == 3 || this.tab[2][0]+this.tab[2][1]+this.tab[2][2] == -3){ this.victory = true }
		if (this.tab[0][0]+this.tab[1][0]+this.tab[2][0] == 3 || this.tab[0][0]+this.tab[1][0]+this.tab[2][0] == -3){ this.victory = true }
		if (this.tab[0][1]+this.tab[1][1]+this.tab[2][1] == 3 || this.tab[0][1]+this.tab[1][1]+this.tab[2][1] == -3){ this.victory = true }
		if (this.tab[0][2]+this.tab[1][2]+this.tab[2][2] == 3 || this.tab[0][2]+this.tab[1][2]+this.tab[2][2] == -3){ this.victory = true }
		if (this.tab[0][0]+this.tab[1][1]+this.tab[2][2] == 3 || this.tab[0][0]+this.tab[1][1]+this.tab[2][2] == -3){ this.victory = true }
		if (this.tab[0][2]+this.tab[1][1]+this.tab[2][0] == 3 || this.tab[0][2]+this.tab[1][1]+this.tab[2][0] == -3){ this.victory = true }
	}

}
