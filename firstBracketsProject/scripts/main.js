
//store my dice & their dice elements in variables
var mydi1 = $('.my-di-1 p');
var mydi2 = $('.my-di-2 p');
var theirdi1 = $('.their-di-1 p');
var theirdi2 = $('.their-di-2 p');



//store game controls/info <p>s in variables 
var rollBtn = $('.game-controls input');
var winLose = $('#win-lose');
var games = $('#gameNum');
var gamesPlayed = 1;
var wins = $('#wins');
var winCount = 1;
var losses = $('#losses')
var lossCount = 1;
var ties = $('#ties');
var tieCount = 1;




var rollRoll = function(){
	if (gamesPlayed === 0 ){
		games.text('Games played: ');
	}
	rollBtn.click(function () {
		var one = Math.floor(Math.random() * 6) + 1;
		var two = Math.floor(Math.random() * 6) + 1;
		var three = Math.floor(Math.random() * 6) + 1;
		var four = Math.floor(Math.random() * 6) + 1;
		var theirDice = three + four;
		var myDice = Number(one) + Number(two);
	
		mydi1.text(one);
		mydi2.text(two);
		theirdi1.text(three);
		theirdi2.text(four);
	
		if(myDice > theirDice){
			winLose.text("!!! YOU WIN !!!");
			wins.text('Wins: ' + winCount);
			winCount++;
		} else if (myDice === theirDice){
			winLose.text("shucks. it's a tie.");
			ties.text('Ties: '+tieCount);
		} else {winLose.text("sorry, but you lost. dang.");
				losses.text('Losses: '+lossCount);
				lossCount++;
		} 
		
		games.text('Games played: '+gamesPlayed);
		gamesPlayed++;
	});
}

$(document).ready(rollRoll);



//After 5 games, .animate() a message like "YOU'VE PLAYED ENOUGH" accross the <html> over 5 seconds and disable the game.


//Use Function Expressions to create functions to print random number on each di and return a number 

var myDi1 = function(){
	var ranVal1 = Math.floor(Math.random() * 6) + 1;
	mydi1.text(ranVal1);
};
var myDi2 = function(){
	var ranVal2 = Math.floor(Math.random() * 6) + 1;
	mydi2.text(ranVal2);
}; 

var theirDi1 = function(){
	var ranVal3 = Math.floor(Math.random() * 6) + 1
	theirdi1.text(ranVal3);
};
var theirDi2 = function(){
	var ranVal4 = Math.floor(Math.random() * 6) + 1
	theirdi2.text(ranVal4);	
};
	


//put in var diceArray[]
var diceArray = [myDi1, myDi2, theirDi1, theirDi2];


//Brilliant!!! Thanks Stackoverflow!!!!!!

////var array_of_functions = [
  //  first_function,
  //  second_function,
  //  third_function,
  //  forth_function
  // ]
////and then when you want to execute a given function in the array:
////array_of_functions[0]('a string');




 

