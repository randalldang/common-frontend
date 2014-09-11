define(['core/eventbus', 'jquery.history'], function(eventBus) {
	var Navigation = function() {
    this.init_();
  };

  Navigation.NAVIGATE_PARAM_KEY = '__go';

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

    History.pushState({code: menuCode, title: title}, title, '?' + 
      Navigation.NAVIGATE_PARAM_KEY + '=' + menuCode);
  };

  Navigation.prototype.start = function() {
    if (History.getState().data.code) {
      this.navigate();
    } else {
      var menuCode = this.getMenuCodeFromLocation_();
      menuCode = menuCode || 'product';
      //TODO: Get menu title by menu code
      History.pushState({code: menuCode, title: menuCode}, menuCode, '?' + 
        Navigation.NAVIGATE_PARAM_KEY + '=' + menuCode); 
    }     
  };

  Navigation.prototype.getMenuCodeFromLocation_ = function() {
    var query = window.location.search;
    if (query.indexOf('?') == 0) {
      query = query.substring(1);
    }
    var queryParams = query.split('&');
    for(var i = 0; i < queryParams.lenght; i++) {
      var param = queryParams.split('=');
      if (param[0] == Navigation.NAVIGATE_PARAM_KEY) {
        return param[1];
      }
    }
  };
  
  return  new Navigation();
});