$(document).ready(function(){
	$('.preference').submit(function(e){
		e.preventDefault();
		createDrink();
	})
});

var Taste = function(questions){
	this.questions = questions;
};

var tastes = new Taste(["Do ye like yer drinks strong?", "Do ye like yer drinks salty?", "Are ye a lubber who likes it bitter?", "Would ye like a bit of sweetness with yer poison?", "Are ye one for a fruity finish?"]);

var Pantry = function(salty, strong, bitter, sweet, fruity){
	this.salty = salty;
	this.strong = strong;
	this.bitter = bitter;
	this.sweet = sweet;
	this.fruity = fruity;
};

var Ingredients = function(ingredients){
	this.ingredients = ingredients;
};

var salty = new Ingredients (["olive, ", "salt-dusted rim, ", "rasher of bacon, "]);
var strong = new Ingredients (["Glug of rum, ", "slug of whiskey, ", "splash of gin, "]);
var bitter = new Ingredients (["shake of bitters, ", "splash of tonic, ", "twist of lemon peel, "]);
var sweet = new Ingredients (["sugar cube, ", "spoonful of honey, ", "splash of cola, "]);
var fruity = new Ingredients (["slice of orange, ", "dash of cassis, ", "cherry on top, "]);

var pantry = new Pantry(salty, strong, bitter, sweet, fruity);

function createDrink() {
	if ($("input[name=strong]").is(':checked')) {
		$('.drink').append(pantry.strong.ingredients[Math.floor(Math.random() * 3)]);
	}
	if ($("input[name=salty]").is(':checked')) {
		$('.drink').append(pantry.salty.ingredients[Math.floor(Math.random() * 3)]);
	}
	if ($("input[name=bitter]").is(':checked')) {
		$('.drink').append(pantry.bitter.ingredients[Math.floor(Math.random() * 3)]);
	} 
	if ($("input[name=sweet]").is(':checked')) {
		$('.drink').append(pantry.sweet.ingredients[Math.floor(Math.random() * 3)]);
	}
	if ($("input[name=fruity]").is(':checked')) {
		$('.drink').append(pantry.fruity.ingredients[Math.floor(Math.random() * 3)]);
	} 
		
	$('.drink').append('<br><br>Drink up Matey! Forget to tip your bartender at ye own peril!');
	
};