//     BackboneCollectionMultisort
//     (c) simonfan
//     BackboneCollectionMultisort is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module BackboneCollectionMultisort
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(["backbone", "comparator"], function (Backbone, comparator) {
	'use strict';

	function multisortId(attributes, directions) {
		return JSON.stringify({
			attributes: attributes,
			directions: directions
		});
	}
	/**
	Helper function that generates an unique identifier based on attributes
	and directions object.
	*/

	var MultiSort = Backbone.Collection.extend({

		/**
		Used to check if collection needs to be resorted.

		@property _multisortId
		@private
		*/
		_multisortId: false,

		/**
		Checks if the collection is sorted according to
		a set of sorting attributes and sorting directions.

		Internally checks a property named _multisortId.

		@method isSorted
		@param attributes {String|Array}
		@param directions {Number|Object}
		*/
		isSorted: function isSorted(attributes, directions) {
			return this._multisortId === multisortId(attributes, directions);
		},

		/**
		Builds a comparator using _.comparator,
		sets it as the collection comparator,
		checks if the collection is already sorted in the requested manner
		and then finally runs the Backbone.Collection.prototype.sort method passing on the options.

		@method multisort
		@param attributes {String|Array}
		@param [directions] {Number|Object}
		@param [options] {Object}
		*/
		multisort: function multisort(attributes, directions, options) {

			// build the multisortId
			var mId = multisortId(attributes, directions);

			if (this._multisortId !== mId) {

				// build and set comparator function
				this.comparator = comparator(attributes, directions, { root: 'attributes' });

				var sort = this.sort(options);
				// save the sort
				this._multisortId = mId;
			}

			return this;
		},
	});

	return MultiSort;
});
