requirejs.config({
	baseUrl: 'js/module',
	paths: {
		jquery: '../lib/jquery-1.11.1.min'
	}
});

var initNamespace = function() {
	com = window['com'] || {};

};

initNamespace();

requirejs(['jquery', 'menu']);