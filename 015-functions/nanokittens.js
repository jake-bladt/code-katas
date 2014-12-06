var theNanoKittens = {
	getCritter: function(nm) {
		return {
			name: nm,
			age: 0,
			toString: function() {
				return nm + " is " + age + " years old.";
			}
		};
	},
	getFactory: function(species, age) {
		return function(critter) {
			critter.species = species;
			critter.age = age;
			critter.toString = function() {
				return nm + " is a " + age + " year old " + species;	
			}
		};
	}
};

var makeKitten    = theNanoKittens.getFactory('cat', 3);
var makeMotherCat = theNanoKittens.getFactory('cat', 4);
var makePuppy     = theNanoKittens.getFactory('dog', 2);

// Create some critters that can become kittens.
var milo   = theNanoKittens.getCritter('Milo');
var rufus  = theNanoKittens.getCritter('Rufus');
var runt   = theNanoKittens.getCritter('Runt');

// Turn them into kittens
makeKitten(milo);
makeKitten(rufus);
makeKitten(runt);

// Examine them
console.log(milo.toString());
console.log(rufus.toString());
console.log(runt.toString());

// Create a mother cat
var tom = makeMotherCat(theNanoKittens.getCritter('Tom Frost'));
console.log(tom.toString());

// Give them a couple of puppies to play with
var spike = theNanoKittens.getCritter('Spike');
var fido  = theNanoKittens.getCritter('Fido');

console.log(spike.toString());
console.log(fido.toString());
