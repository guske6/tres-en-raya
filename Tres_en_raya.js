class TresEnRaya{
	constructor(tab=[[0,0,0],[0,0,0],[0,0,0]]){
		this.tab = tab;
	}
	
	gameStart(){
		/* function that start the game */
		var player1 = 1;
		var player2 = 2;
		var selectedPlayer = 0;
		var victory = false;
		
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
		
		while (victory == false) {
			this.askmove(selectedPlayer);
			/*
			victorySearch();
			*/
			if (selectedPlayer == 1){
				console.log("Player 2");
				selectedPlayer = player2;
			} 
			else{
				selectedPlayer = player1;
				console.log("Player 1");
			}
		}
	}
	
	askmove(player){
		var movec = prompt("Select column(1, 2 or 3): ");
		var mover = prompt("Select row(1, 2 or 3): ");
		this.tab[movec-1][mover-1] = player;
	}
	/*
	victorySearch(){
		if (this.tab[0][0]){}
	}
	*/
}
