
//store my dice & their dice elements in variables
var mydi1 = $('.my-di-1 p');
var mydi2 = $('.my-di-2 p');
var theirdi1 = $('.their-di-1 p');
var theirdi2 = $('.their-di-2 p');

//store game info & roll button and 
var gameInfo = $('.game-controls p');
var rollBtn = $('.game-controls input');

//create variable to store wins/losses data
var winLose = $('.win-lose');
//create variable to keep track of game count





//create functions to print random number on each di and return a number 

function myDi1(){
	var ranVal = Math.floor(Math.random() * 6) + 1;
	mydi1.text(ranVal);
};
function myDi2(){
	var ranVal = Math.floor(Math.random() * 6) + 1;
	mydi2.text(ranVal);
}; 

function theirDi1(){
	theirdi1.text(Math.floor(Math.random() * 6) + 1);
};
function theirDi2(){
	theirdi2.text(Math.floor(Math.random() * 6) + 1);	
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






//Create function rollDice() which will...

//1: print random numbers on each of the dice
//2: roll the dice 10 times
//Create function to call all for "dice roll" function
//link it to the "Click to Roll" button and allow it to run once the webpage has loaded

function rollDice(){
	rollBtn.click(function() {
		myDi1(); myDi2(); theirDi1(); theirDi2();
	});
};

$(document).ready(rollDice);








//create function to check if win or lose

//function checkWin

//use conditionals to alert "YOU WIN!" and print "win" in $('#win-lose)









