require.config({
  shim: {
  	"backbone":{
  		deps:["../bower_components/underscore/underscore", "jquery"],
  		exports: "Backbone"
  	}
  },
  
  paths: {
  	jquery: 'vendor/jquery-1.10.2',
  	backbone: '../bower_components/backbone/backbone',
    prettify: '../bower_components/google-code-prettify/src/prettify'
  }
});


console.log("hello2");

require(['views/app', 'prettify'], function(AppView){
	window.App = {
		Vent: _.extend({}, Backbone.Events)
	};

	new AppView();
});

