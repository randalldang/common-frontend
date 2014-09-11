define(['core/eventbus', 'core/navigation'], function(eventBus, navigation) {
  var Product = function() {
    this.navigation = navigation;
    this.init_();
    this.loadTemplate();
  };

  Product.prototype.init_ = function() {
    eventBus.bind('navigate', function (event, menu) {
      if (menu && menu.code == 'product') {
        $('#content').html($.templates('#product-template').render());
        console.log('Product - ' + menu.code + ':' + menu.title);
      }
    }); 
    
  };  

  Product.prototype.loadTemplate = function() { 
    //$('#template-container').load('template/common/product.tpl');
  }; 
  
  return Product;
});