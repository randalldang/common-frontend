requirejs.config({
	baseUrl: 'js/module',
	paths: {
		'jquery': '../lib/jquery-1.11.1.min',
    'jquery.jsrender': '../lib/jsrender.min',
		'jquery.history': '../lib/jquery.history'
	},
	shim: {
		'jquery.history' : ['jquery'],
    'jquery.jsrender' : ['jquery']
	},
});

requirejs(['jquery', 'jquery.history', 'jquery.jsrender', 'portal/admin/initializer']);