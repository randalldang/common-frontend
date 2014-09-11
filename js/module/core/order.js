define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Order = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  Order.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      if (menu && menu.code == 'order') {
         $('#content').html($.templates('#order-template').render());
         console.log('Order - ' + menu.code + ':' + menu.title);
      }
    }); 
  };  


  Order.prototype.loadTemplate = function() {
    //$('#template-container').load('template/common/menu.tpl');
  }; 
  
  return Order;
});