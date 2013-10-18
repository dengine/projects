// This is the main entry point for the App
define(['router'], 
	function(Router) {

	var initialize = function() {
        Router.init();
    };

	return { init: initialize };
});