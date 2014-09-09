define('initializer', ['eventBus', 'Navigation', '../admin/menu'], function(eventBus, Navigation, AdminMenu) {
    var navigation = new Navigation();
    var adminMenu = new AdminMenu(navigation);
})