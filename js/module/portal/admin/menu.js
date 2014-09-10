define(['core/eventbus', 'core/menu'], function(eventBus, Menu) {
  var AdminMenu = function() {
    this.loadTemplate();
    this.bindEvent();
  };

  AdminMenu.prototype = new Menu();
  
  AdminMenu.prototype.bindEvent = function() {
    $('#menu1').bind('click', $.proxy(function() {
      this.navigation.go('home', 'Homepage');
    }, this));

    $('#menu2').bind('click', $.proxy(function() {
      this.navigation.go('product', 'Product');
    }, this));  
  };



  
  return AdminMenu;
});