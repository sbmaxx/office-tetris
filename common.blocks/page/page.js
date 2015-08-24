modules.define('page', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('page', {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('b-page inited');
                    this.bindToDoc('keydown', function(e) {
                        console.log('keydown');
                        channels('default').emit('key', e);
                    });
                    this.bindTo('click', function(e) {
                        channels('default').emit('click', e);
                    });
                }
            }
        }
    });

    provide(BEMDOM);

});
