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
			// generate random number
			numberTarget = this.generateNumber(19, 120)
			$("#targetNum").html(numberTarget)
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

			this.gameOn = true
		},

		addCoin: function (coinValue) {
				// add value of coin to total score 
					this.total += coinValue;
					$("#totalScore").html(this.total);
					// console.log(this.total);
		},

		winLose: function () {
			// if totalScore = numberTarget then alert you win
				// wins++
			// else if totalScore >numberTarget then alert you lose
				//lose++
		},

		generateNumber: function(min, max) {
     		return Math.floor(Math.random()*(max-min))+min;
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
		alert("Please click on Start Game");
	}
});
















};