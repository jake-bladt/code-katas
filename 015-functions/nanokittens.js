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

var kittenFactory = theNanoKittens.getFactory('cat', 3);
var mkFactory = theNanoKittens.getFactory('cat', 4);
var puppyFactory = theNanoKittens.getFactory('dog', 2);
