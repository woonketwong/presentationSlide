require.config({
  shim: {
  	"backbone":{
  		deps:["../app/bower_components/underscore/underscore.js", "jquery"],
  		exports: "Backbone"
  	}
  },
  
  paths: {
  	jquery: 'vendor/jquery.min',
  	backbone: '../bower_components/backbone/backbone'
  }
});

require(['backbone'], function(){
});

console.log("hello2");

require(['models/slide', 'views/slide'], function(SlideModel, SlideView){
	var slide = new SlideModel({title: 'My First Slide'});
	// console.log(slide);
	var slideView = new SlideView({model: slide});
	console.log(slideView);
});

