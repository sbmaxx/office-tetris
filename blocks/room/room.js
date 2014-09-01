modules.define('room', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindToDoc('keydown', this._onKey);
                }
            }
        },
        _onKey: function(e) {
            channels('keyboard').emit('key', e);
        }
    });

    provide(BEMDOM);

});
