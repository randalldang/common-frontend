define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Menu = function() {
    this.navigation = navigation;
    this.init_();
  };

  Menu.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      console.log('menu - ' + menu.code + ':' + menu.title);
    }); 
  };  


  Menu.prototype.loadTemplate = function() {
    $('#menu').html($.templates('#menu-template').render());
    //$('#template-container').load('template/common/menu.tpl');
  }; 
	
  return Menu;
});