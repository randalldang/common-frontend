define('eventBus', ['jquery'], function() {
	var eventBus = {};

	eventBus.trigger = function(event, opt_params){
	  $(this).trigger(event, opt_params);
	};

	eventBus.bind = function(event, opt_data, opt_callback){
    $(this).bind(event, opt_data, opt_callback);
  };

  eventBus.unbind = function(event){
    $(this).unbind(event);
  };

  return eventBus;
});