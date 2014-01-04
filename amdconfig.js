require.config({
	urlArgs: 'bust=0.6290664107073098',
	baseUrl: '/',
	paths: {
		requirejs: 'bower_components/requirejs/require',
		text: 'bower_components/requirejs-text/text',
		mocha: 'node_modules/mocha/mocha',
		should: 'node_modules/should/should',
		'backbone.collection.multisort': 'src/backbone.collection.multisort',
		backbone: 'bower_components/backbone/backbone',
		comparator: 'bower_components/comparator/src/comparator',
		jquery: 'bower_components/jquery/jquery',
		lodash: 'bower_components/lodash/dist/lodash.compat',
		'requirejs-text': 'bower_components/requirejs-text/text',
		underscore: 'bower_components/underscore/underscore'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
