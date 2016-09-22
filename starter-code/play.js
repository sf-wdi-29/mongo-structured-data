var db = require("./models.js");

var shad = new db.User({name: "Shadowist"});


var tweet1 = new db.Tweet({body: "xyzzy"});



//1.
var shad = new db.User({name: "Shadowist"});
shad.save();

//2.
var tweet1 = new db.Tweet({body: "abcde"});
var tweet2 = new db.Tweet({body: "xyzzy"});
tweet1.save();
tweet2.save();
shad.tweets.push(tweet1);
shad.tweets.push(tweet2);
shad.save();

//3.
db.User.find({}, function(err, allUsers)
{
	console.log({ users: allUsers });
});

//4.
db.User.find({name: "Shad"}, function(err, user)
{
	console.log(user[0].tweets);
})

//5.
var sugar = new db.Ingredient({title: "Sugar"});
var chocolate = new db.Ingredient({title: "Chocolate"});
var flour = new db.Ingredient({title: "flour"});
sugar.save();
chocolate.save();
flour.save();

//6.
var chocolateChipCookie = new db.Food({name: "Chocolate Chip Cookie"});
chocolateChipCookie.ingredients.push(sugar);
chocolateChipCookie.ingredients.push(flour);
chocolateChipCookie.ingredients.push(chocolate);
chocolateChipCookie.save();

//7.
db.Food.find({}, function(err, allFoods)
{
	console.log({ users: allFoods });
});



//8.
var cccIngredients;

db.Food.find({name: "Chocolate Chip Cookie"}, function(err, allFoods)
{
	cccIngredients = allFoods[0].ingredients;
	for(var i = 0; i < cccIngredients.length; i++)
	{
		db.Ingredient.find({_id: cccIngredients[i]}, function(err, ingredient)
		{
			console.log(ingredient);
		});
	}
})

