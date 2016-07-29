
$(document).ready(function(){
	var randomNum,
	guessNum,
	numFeedback;

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
			alreadyGuessed = [];
			numFeedback = "";
			$("#feedback").text("Make your Guess!");
		});

		// stores users guess
		$("#guessButton").click(function(event){
			event.preventDefault();
	    guessNum = parseInt($("#userGuess").val());
			numCheck(randomNum, guessNum);
			$("#userGuess").val("");
			guessQ(guessNum);
			guessCount =+ 1;
	  });

		function buttonCheck(){
			alert("please enter your guess");
		}

		// checks number and outputs feedback
		function numCheck(rand, guess){
			var howClose = guess - rand;
			numFeedback = Math.abs(howClose);
			console.log(numFeedback);
			console.log("random #: " + rand);
			console.log("guess #: " + guess);
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

		function guessQ(guess){
			var guessCount = 0;
			alreadyGuessed.push(guess);
			$("#guessList").append("<li>" + alreadyGuessed[guessCount] + "</li>");
			console.log(guessCount);
			console.log(alreadyGuessed[guessCount]);
		}

});
