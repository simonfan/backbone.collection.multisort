(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src' :
		// browser
		'backbone.collection.multisort',
		// dependencies for the test
		deps = [mod, 'should'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(MultiSort, should) {
	'use strict';

	describe('MultiSort base', function () {
		beforeEach(function() {
			var fruits = this.fruits = [];

			fruits.push({
				name: 'Orange',
				price: 3,
				quantity: 20,
			});

			fruits.push({
				name: 'Banana',
				price: 4,
				quantity: 20,
			});

			fruits.push({
				name: 'Apple',
				price: 4,
				quantity: 30,
			});
		});

		it('can be instantiated', function() {
			var fr = new MultiSort(this.fruits);

			fr.should.be.type('object');
			fr.multisort.should.be.type('function');
		});


		it('sortable.sort([\'name\'])', function() {
			var fr = new MultiSort(this.fruits);

			fr.multisort(['name'], 1);

			fr.pluck('name')
				.should.eql(['Apple','Banana','Orange']);
		});

		it('sortable.isSorted(attributes, directions)', function() {
			var fr = new MultiSort(this.fruits),
				sortingAttributes = ['name'],
				sortingDirections = 1;

			// before sort
			fr.isSorted(sortingAttributes, sortingDirections).should.be.false;

			// sort
			fr.multisort(sortingAttributes, sortingDirections);

			// after sort
			fr.isSorted(sortingAttributes, sortingDirections).should.be.true;
		});

	});
});
