define('Menu', ['eventBus'], function(eventBus) {
  var Menu = function(navigation) {
    this.navigation = navigation;
    this.init_();
  };

  Menu.prototype.init_ = function() {
    var navigation = this.navigation;
    eventBus.bind('navigate', function (event, menu) {
      console.log('menu - ' + menu.code + ':' + menu.title);
    });

    $('#menu1').bind('click', function() {
      navigation.go('home', 'Homepage');
    });

    $('#menu2').bind('click', function() {
      navigation.go('product', 'Product');
    });
  };  
	
  return Menu;
});