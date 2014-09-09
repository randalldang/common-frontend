requirejs.config({
	baseUrl: 'js/module/core',
	paths: {
		'jquery': '../../lib/jquery-1.11.1.min',
		'jquery.history': '../../lib/jquery.history'
	},
	shim: {
		'jquery.history' : ['jquery']
	}
});

requirejs(['jquery', 'jquery.history', 'menu', 'navigation', '../portal/admin/initializer']);