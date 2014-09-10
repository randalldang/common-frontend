define(['core/eventbus', 'core/navigation'], function(eventBus, Navigation) {
  var Menu = function() {
    this.navigation = new Navigation();
    this.init_();
  };

  Menu.prototype.init_ = function() {
    var navigation = this.navigation;
    eventBus.bind('navigate', function (event, menu) {
      console.log('menu - ' + menu.code + ':' + menu.title);
    }); 
  };  


  Menu.prototype.loadTemplate = function() {
    $('#header').html($.templates('#menu').render());
    //$('#template-container').load('template/common/menu.tpl');
  }; 
	
  return Menu;
});