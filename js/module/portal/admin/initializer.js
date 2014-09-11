define(['core/navigation', 'core/header', 'core/footer', 'core/breadcrumb',
  'core/user', 'core/product', 'core/order', 'portal/admin/menu'], function(
    navigation, Header, Footer, Breadcrumb, User, Product, Order, Menu) {
    var menu = new Menu();
    var footer = new Footer();
    var header = new Header();
    var breadcrumb = new Breadcrumb();
    var user = new User();
    var product = new Product();
    var order = new Order();

    navigation.start();
});