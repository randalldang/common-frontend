define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Header = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  Header.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      console.log('Header - ' + menu.code + ':' + menu.title);
    }); 
  };  


  Header.prototype.loadTemplate = function() {
    $('#header').html($.templates('#header-template').render());
    //$('#template-container').load('template/common/menu.tpl');
  }; 
  
  return Header;
});