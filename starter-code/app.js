var tweet1 = new db.Tweet({
    body: "hey"
});
tweet1.save();

var tweet2 = new db.Tweet({
    body: "heya"
});
tweet2.save();

var tweet3 = new db.Tweet({
    body: "hoy"
});
tweet3.save();

var brandon = new db.User({
    name: "Brandon",
});
brandon.save();


db.User.find({}, function(err, users) {
    console.log(users);
});

db.User.findOne({
    name: "Brandon"
}, function(err, user) {
    console.log(user);
});

db.User.findOne({
    name: "Brandon"
}, function(err, user) {
    console.log(user.tweets);
});

var carrot = new db.Ingredient({
    title: "carrot",
    origin: "italy"
});
carrot.save();

var cake = new db.Ingredient({
    title: "cake",
    origin: "walmart bakery"
});
cake.save();

var myFavoriteFood = new db.Food({
    name: "carrotcake",
    ingredients: [carrot, cake]
});
myFavoriteFood.save();

db.Food.find({}, function(err, someFood) {
    console.log(someFood);
});

db.Ingredient.find({
        _id: {
            $in: myFavoriteFood.ingredients
        }
    },
    function(err, ingredients) {
        console.log(ingredients);
    }
);
//http://stackoverflow.com/questions/7713363/mongo-db-select-where-in-array-of-id
