define('AdminMenu', ['eventBus', 'Menu'], function(eventBus, Menu) {
  var AdminMenu = function(navigation) {
    this.navigation = navigation;
  };

  AdminMenu.prototype = new Menu(this.navigation);
  
  return AdminMenu;
});