define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var User = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  User.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      if (menu && menu.code == 'user') {
        $('#content').html($.templates('#user-template').render());
        console.log('User - ' + menu.code + ':' + menu.title);
      }
    }); 
  };  


  User.prototype.loadTemplate = function() {
    //$('#template-container').load('template/common/user.tpl');
  }; 
  
  return User;
});