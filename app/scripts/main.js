require.config({
  shim: {
  	"backbone":{
  		deps:["../app/bower_components/underscore/underscore.js", "jquery"],
  		exports: "Backbone"
  	}
  },
  
  paths: {
  	jquery: 'vendor/jquery-1.10.2',
  	backbone: '../bower_components/backbone/backbone'
  }
});

require(['backbone'], function(){
});

console.log("hello2");

require(['views/app'], function(App){
	new App();
});

