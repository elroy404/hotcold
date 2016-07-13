
$(document).ready(function(){
	var randomNum;
	var guessNum;
	numGenerator();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		// Generates a random number between 1-100
		function numGenerator(){
			randomNum = Math.floor((Math.random()*100)+1);
			console.log("random #: " + randomNum);
		}

		// stores users guess
		$("#guessButton").click(function(){
	    guessNum = parseInt($("#userGuess").val());
			feedback(randomNum, guessNum);
	  });

		// checks number and outputs feedback
		function feedback(rand, guess){
			var x = guess - rand;
			var i = Math.abs(x);
			console.log(i);
			console.log("random #: " + rand);
			console.log("guess #: " + guess);
			if(i>50){
				console.log("ice cold");
			}
			else if(i>=40 && i<50){
				console.log("cold");
			}
			else if(i>=20 && i<40){
				console.log("warm");
			}
			else if(i>=10 && i<20){
				console.log("hot");
			}
			else if(i>=1 && i<10){
				console.log("very hot");
			}
			else if(i==0){
				console.log("This is the number!");
			}
			else{
				console.log("Error");
			}
		}

});
