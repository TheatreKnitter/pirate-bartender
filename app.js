$(document).ready(function(){
	$('.preference').submit(function(e){
		e.preventDefault();
		createDrink();
	})
});

var taste = function(questions){
	this.questions = questions;
};

var tastes = new quesions(["Do ye like yer drinks strong?", "Do ye like yer drinks salty?", "Are ye a lubber who likes it bitter?", "Would ye like a bit of sweetness with yer poison?", "Are ye one for a fruity finish?"]);

var pantry = function(items){
	this.items = items;
};

var salty = new items (["olive, ", "salt-dusted rim, ", "rasher of bacon, "]);
var strong = new items (["Glug of rum, ", "slug of whiskey, ", "splash of gin, "]);
var bitter = new items (["shake of bitters, ", "splash of tonic, ", "twist of lemon peel, "]);
var sweet = new items (["sugar cube, ", "spoonful of honey, ", "splash of cola, "]);
var fruity = new items (["slice of orange, ", "dash of cassis, ", "cherry on top, "]);



function createDrink() {
	if ($("input[name=strong]").attr('checked', true)) {
		$('.drink').append(strong[Math.floor(Math.random() * 3)])
	} if ($("input[name=salty]").attr('checked', true)) {
		$('.drink').append(salty[Math.floor(Math.random() * 3)])
	} if ($("input[name=bitter]").attr('checked', true)) {
		$('.drink').append(bitter[Math.floor(Math.random() * 3)])
	} if ($("input[name=sweet]").attr('checked', true)) {
		$('.drink').append(sweet[Math.floor(Math.random() * 3)])
	} if ($("input[name=fruity]").attr('checked', true)) {
		$('.drink').append(fruity[Math.floor(Math.random() * 3)])
	}; 
		
	$('.drink').append('<br><br>Drink up Matey! Forget to tip your bartender at ye own peril!');
	
};