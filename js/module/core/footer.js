define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Footer = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  Footer.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      console.log('Footer - ' + menu.code + ':' + menu.title);
    }); 
  };  


  Footer.prototype.loadTemplate = function() {
    $('#footer').html($.templates('#footer-template').render());
    //$('#template-container').load('template/common/menu.tpl');
  }; 
  
  return Footer;
});