define(['core/eventbus', 'core/menu'], function(eventBus, Menu) {
  var AdminMenu = function() {
    this.loadTemplate();
    this.bindEvent();
  };

  AdminMenu.prototype = new Menu();
  
  AdminMenu.prototype.bindEvent = function() {
    $('#menu').bind('click', $.proxy(function(event) {
      var target = event.target ? event.target : event.srcElement;
      var menuCode = $(target).attr('__menucode');
      if (menuCode) {
        $('#menu li').removeClass('active');
        $(target).parent().addClass('active');
        this.navigation.go(menuCode, menuCode);  
      }}, this));

    
  };

  return AdminMenu;
});