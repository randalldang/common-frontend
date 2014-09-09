define('Navigation', ['eventBus'], function(eventBus) {
	var Navigation = function() {
    this.init_();
  };

  Navigation.prototype.init_ = function() {
    window.onstatechange = this.navigate;
  };

  Navigation.prototype.navigate = function() {
    eventBus.trigger('navigate', History.getState().data);
  };

  Navigation.prototype.go = function(menuCode, title) {
    if (!menuCode) {
      return;
    }

    History.pushState({code: menuCode, title: title}, title, "?__go=" + menuCode);
  };
  
  return  Navigation;
});