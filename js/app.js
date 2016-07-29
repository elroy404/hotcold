
$(document).ready(function(){
	var randomNum,
	guessNum,
	numFeedback;

	var guessCount = 0;
	var alreadyGuessed = [];
	pageLoad();

		function pageLoad(){
			/*--- Display information modal box ---*/
	  	$(".what").click(function(){
	    	$(".overlay").fadeIn(1000);
	  	});

	  	/*--- Hide information modal box ---*/
	  	$("a.close").click(function(){
	  		$(".overlay").fadeOut(1000);
	  	});
			numGenerator();
		}

		// Generates a random number between 1-100
		function numGenerator(){
			randomNum = Math.floor((Math.random()*100)+1);
			console.log("random #: " + randomNum);
		}

		//click NEW GAME button to generate a new random number
		$(".new").click(function(){
			numGenerator();
			clearGame();
		});

		//clears game variables and feedback
		function clearGame(){
			alreadyGuessed = [];
			numFeedback = "";
			guessCount = 0;
			$("#guessList").text("");
			$("#feedback").text("Make your Guess!");
			$("#count").text("0");
		}

		// stores users guess
		$("#guessButton").click(function(event){
			event.preventDefault();
	    guessNum = parseInt($("#userGuess").val());
			buttonCheck(guessNum);
			if(isNaN(guessNum) == false){
				numCheck(randomNum, guessNum);
				$("#userGuess").val("");
				guessQ(guessNum);
				numOfGuesses();
			}
	  });

		//makes sure you enter a guess
		function buttonCheck(blankTxt){
			if(isNaN(blankTxt) == true){
				alert("please enter your guess");
			}
		}

		// checks number and outputs feedback
		function numCheck(rand, guess){
			var howClose = guess - rand;
			numFeedback = Math.abs(howClose);
			if(numFeedback >= 50){
				$("#feedback").text("ice cold");
			}
			else if(numFeedback >= 40 && numFeedback < 50){
				$("#feedback").text("cold");
			}
			else if(numFeedback >= 20 && numFeedback < 40){
				$("#feedback").text("warm");
			}
			else if(numFeedback >= 10 && numFeedback < 20){
				$("#feedback").text("hot");
			}
			else if(numFeedback >= 1 && numFeedback < 10){
				$("#feedback").text("very hot");
			}
			else if(numFeedback == 0){
				$("#feedback").text("This is the number! \nClick new game to play again");
			}
			else{
				console.log("Error");
			}
		}

		//feedback on what users guesses were
		function guessQ(guess){
			alreadyGuessed.push(guess);
			$("#guessList").append("<li>" + alreadyGuessed[guessCount] + "</li>");
			// console.log("guess count: " + guessCount);
			// console.log("number already guessed: " + alreadyGuessed[guessCount]);
		}

		//tracks how many guesses the user made
		function numOfGuesses(){
			guessCount = guessCount + 1;
			$("#count").text(guessCount);
		}
});
