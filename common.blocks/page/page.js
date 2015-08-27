modules.define('page', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('page', {
        onSetMod: {
            js: {
                inited: function() {
                    this.findBlockInside('json');
                }
            }
        }
    });

    provide(BEMDOM);

});
