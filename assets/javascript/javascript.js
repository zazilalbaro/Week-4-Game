// document.ready() {
window.onload = function() {

var game = {
		wins: 0,
		losses: 0,
		numberTarget: null,
		total: 0,
		coins: [],
		numOfCoins: 4,
		gameOn: false,

		startGame: function () {
			// reset values just in case the previous game didn't end
			this.resetGame();
			// generate random number
			this.numberTarget = this.generateNumber(19, 120)
			$("#targetNum").html(this.numberTarget)
			$("#totalScore").html("-");
			// reset random coin values
			var random;
			for (i=0; i<this.numOfCoins; i++) {
				random = this.generateNumber(1, 12);
				this.coins.push(random);
			}
			$("#coin1").attr("value", this.coins[0])
			$("#coin2").attr("value", this.coins[1])
			$("#coin3").attr("value", this.coins[2])
			$("#coin4").attr("value", this.coins[3])

			console.log(this.coins);
			this.gameOn = true
		},

		addCoin: function (coinValue) {
			// add value of coin to total score 
			this.total += coinValue;
			$("#totalScore").html(this.total);
			console.log(this.total);
			console.log(this.numberTarget);
			// win/lose?
			if (this.total === this.numberTarget) {
				game.winLose("win");
			}
			else if (this.total > this.numberTarget) {
				game.winLose("lose");
			}
		},

		winLose: function (endStatus) {
			// if total= numberTarget then alert you win
				// wins++
			if (endStatus === "win") {
				alert ("You win! Great job!");
				this.wins++;
				console.log(this.wins);
				$("#wins").html("Wins: " + this.wins);
				this.resetGame();
			}
			// else if total >numberTarget then alert you lose
				//lose++
			else if (endStatus === "lose") {
				alert("Oops, you went over the target. Try again!");
				this.losses++;
				console.log(this.losses);
				$("#losses").html("Losses: " + this.losses);
				this.resetGame();
			}	
		},

		generateNumber: function(min, max) {
     		return Math.floor(Math.random()*(max-min))+min;
		},

		resetGame: function() {
			this.gameOn = false;
			this.numberTarget = null;
			this.coins = [];
			this.total = 0;
			// $("#targetNum").html("-");
			// $("#totalScore").html("-");
		}
}; //end of object	



$("#newGame").on("click", function() {
	game.startGame();
});

$(".img").on("click", function() {
	if (game.gameOn) {
	var coinValue = parseInt($(this).attr("value"));
	// console.log(coinValue);
	game.addCoin(coinValue);
	}
	else {
		alert("Please click on the Start Game button");
	}
});
















};