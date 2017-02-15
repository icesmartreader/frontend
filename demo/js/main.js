'use strict'
require.config({
  paths:{
     //alias and paths of modules
      'domReady': '../bower_components/domReady/domReady',
	    'angular': '../bower_components/angular/angular',
			'angularRoute': '../bower_components/angular-route/angular-route',

			'ngSmartTable': '../bower_components/angular-smart-table/dist/smart-table',
			'ngAnimate': '../bower_components/angular-animate/angular-animate',
			'ngToaster': '../bower_components/AngularJS-Toaster/toaster',
			'ngCookies': '../bower_components/angular-cookies/angular-cookies',

	    'jquery': '../bower_components/jquery/dist/jquery',
	    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
	    'spin': '../bower_components/spin.js/spin',
	    'angularSpinner': '../bower_components/angular-spinner/angular-spinner',
		'echarts': '../bower_components/echarts/dist/echarts',
		'echarts-dark': '../bower_components/echarts/theme/dark'
  },
  shim:{
    //modules and their dependent modules
    'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},
		'angularRoute': {
	        deps: ['angular'],
	        exports: 'angularRoute'
	    },
		'ngSmartTable': {
			deps: ['angular'],
			exports: 'ngSmartTable'
		},
		'ngAnimate': {
	        deps: ['angular'],
	        exports: 'ngAnimate'
	    },
		'ngToaster': {
			deps: ['angular', 'ngAnimate'],
			exports: 'ngToaster'
		},
		'ngCookies': {
			deps: ['angular'],
			exports: 'ngCookies'
		},

	    'jquery': {
				exports: 'jquery'
			},
	    'bootstrap': {
	      exports: 'bootstrap',
	      deps: ['jquery']
	    },
	    'spin':{
	    	exports: 'spin'
	    },
	    'angularSpinner':{
	    	exports: 'angularSpinner',
	    	deps: ['angular', 'spin']
	    },
		'echarts': {
			exports: 'echarts'
		},
		'echarts-dark': {
			deps: ['echarts'],
			exports: 'echarts-dark'
		}
  },

  //kick start applicaiton
  deps:['bs']
});
