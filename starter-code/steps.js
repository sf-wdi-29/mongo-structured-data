//1
var ryan = new db.User({name: 'ryan'});
ryan.save();

var buddy = new db.User({name: 'buddy'});
buddy.save();


//2
var first = new db.Tweet({body: 'hey there!!!'});
ryan.tweets.push(first);
ryan.save();


//3
db.User.find({}, function (err, usr) {
    console.log(usr);
});


//4
db.User.findOne({name: 'ryan'}, function (err, usr) {
    console.log(usr.tweets);
});


//5
var potato = new db.Ingredient({title: 'potato', origin: 'detroit'});
potato.save();

var sugar = new db.Ingredient({title: 'sugar', origin: 'junction city'});
sugar.save();

// select *
// db.Ingredient.find({}, function (err, ing) {
//     console.log(ing);
// });


//6
var sweetPotato = new db.Food({name: 'sweet potato', ingredients: [sugar._id, potato._id]});
sweetPotato.save();


//7
var shrimp = new db.Ingredient({title: 'shrimp', origin: 'greenbough, ALABAMA'});
shrimp.save();

var grits = new db.Ingredient({title: 'grits', origin: 'Als town,ALABAMA'});
grits.save();

var shrimpNgrits = new db.Food({name: 'shrimp n grits', ingredients: [shrimp._id, grits._id]});
shrimpNgrits.save();

db.Food.find({}, function (err, ing) {
    console.log(ing);
});


//8
// list all ingredients in a food

db.Ingredient.find(
  {
    _id: {$in: shrimpNgrits.ingredients}
  },
  function(err, ingredients){
    console.log(ingredients);
  }
);
