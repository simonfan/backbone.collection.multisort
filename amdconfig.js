require.config({
	urlArgs: 'bust=0.7158285474870354',
	baseUrl: '/',
	paths: {
		requirejs: 'bower_components/requirejs/require',
		text: 'bower_components/requirejs-text/text',
		'backbone.collection.multisort': 'src/backbone.collection.multisort',
		backbone: 'bower_components/backbone/backbone',
		jquery: 'bower_components/jquery/jquery',
		'requirejs-text': 'bower_components/requirejs-text/text',
		'underscore.comparator': 'bower_components/underscore.comparator/src/underscore.comparator',
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
		}
	}
});
