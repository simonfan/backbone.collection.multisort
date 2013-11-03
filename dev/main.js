require.config({
	urlArgs: "bust=0.9075256462674588",
	baseUrl: "/dev",
	paths: {
		requirejs: "bower_components/requirejs/require",
		text: "bower_components/requirejs-text/text",
		"backbone.collection.multisort": "../backbone.collection.multisort",
		backbone: "bower_components/backbone/backbone",
		jquery: "bower_components/jquery/jquery",
		"requirejs-text": "bower_components/requirejs-text/text",
		underscore: "bower_components/underscore/underscore",
		"underscore.comparator": "bower_components/underscore.comparator/underscore.comparator"
	},
	shim: {
		backbone: {
			exports: "Backbone",
			deps: [
				"jquery",
				"underscore"
			]
		},
		underscore: {
			exports: "_"
		}
	}
});

(function() {
    var load = window.__load || 'amd-test-runner';
    require([load], function(mod) {
        console.log('Main loading finished.');
    });
})();
