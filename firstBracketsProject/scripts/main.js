
//store my dice & their dice elements in variables
var mydi1 = $('.my-di-1 p');
var mydi2 = $('.my-di-2 p');
var theirdi1 = $('.their-di-1 p');
var theirdi2 = $('.their-di-2 p');

//store game info & roll button and 
var gameInfo = $('.game-controls p');
var rollBtn = $('.game-controls input');

//generate random number
var ranNum = Math.floor(Math.random() * 6 + 1);

//create functions to print random number on each di
function myDi1(){
	var value = mydi1.text(Math.floor(Math.random() * 6 + 1));
	return Number(value);
};
function myDi2(){
	mydi2.text(Math.floor(Math.random() * 6 + 1));
};
function theirDi1(){
	theirdi1.text(Math.floor(Math.random() * 6 + 1));
};
function theirDi2(){
	theirdi2.text(Math.floor(Math.random() * 6 + 1));
};

//Create function to call all for "dice roll" function
//link it to the "Click to Roll" button and allow it to run once the webpage has loaded
function rollDice(){
	rollBtn.click(function() {
		myDi1(); myDi2(); theirDi1(); theirDi2();
	});
};

$(document).ready(rollDice);

//use conditionals to alert "YOU WIN!" and print "win" in rollBtn if the added value of my dice > than that of their dice 

 

