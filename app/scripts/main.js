require.config({
  shim: {
  	"backbone":{
  		deps:["../bower_components/underscore/underscore", "jquery"],
  		exports: "Backbone"
  	}
  },
  
  paths: {
  	jquery: 'vendor/jquery-1.10.2',
  	backbone: '../bower_components/backbone/backbone'
  }
});


console.log("hello2");

require(['views/app'], function(AppView){
	window.App = {
		Vent: _.extend({}, Backbone.Events)
	};

	new AppView();
});

