define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Breadcrumb = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  Breadcrumb.prototype.init_ = function() {
    var navigation = this.navigation;
    eventBus.bind('navigate', function (event, menu) {
      var title = menu.title || '';
      $('#breadcrumb').html($.templates('#breadcrumb-template').render({menu: menu.title.toUpperCase()}));
      console.log('Breadcrumb - ' + menu.code + ':' + menu.title);
    }); 
  };  


  Breadcrumb.prototype.loadTemplate = function() { 
    //$('#template-container').load('template/common/menu.tpl');
  }; 
  
  return Breadcrumb;
});