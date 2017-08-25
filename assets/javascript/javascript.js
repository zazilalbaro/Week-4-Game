// document.ready() {
window.onload = function() {

var game = {
		wins: 0,
		losses: 0,
		numberTarget: null,
		totalScore: 0,
		coins: {
			coin1: null, 
			coin2: null, 
			coin3: null, 
			coin4: null
		},

		startGame: function () {
			// generate random number
			numberTarget = this.generateNumber(19, 120)
			$("#targetNum").html(numberTarget)
			// reset random coin values
			for (i=0; i<game.coins.length; i++) {
				this.coins[i] = this.generateNumber(1, 12)
			}
			$("#coin1").attr("value", this.coins[0])
			$("#coin2").attr("value", this.coins[1])
			$("#coin3").attr("value", this.coins[2])
			$("#coin4").attr("value", this.coins[3])
			console.log(this.coins)
		},

		addCoin: function (coinValue) {
				// add value of coin to total score 
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
















};